import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMediaForFragmentListRequestBody extends SpeakeasyBase {
    /**
     * A list of the numbers of fragments for which to retrieve media. You retrieve these values with <a>ListFragments</a>.
     */
    fragments: string[];
    /**
     * The Amazon Resource Name (ARN) of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamName</code> parameter.
     */
    streamARN?: string;
    /**
     * The name of the stream from which to retrieve fragment media. Specify either this parameter or the <code>StreamARN</code> parameter.
     */
    streamName?: string;
}
export declare class GetMediaForFragmentListRequest extends SpeakeasyBase {
    requestBody: GetMediaForFragmentListRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMediaForFragmentListResponse extends SpeakeasyBase {
    /**
     * ClientLimitExceededException
     */
    clientLimitExceededException?: any;
    contentType: string;
    /**
     * Success
     */
    getMediaForFragmentListOutput?: shared.GetMediaForFragmentListOutput;
    /**
     * InvalidArgumentException
     */
    invalidArgumentException?: any;
    /**
     * NotAuthorizedException
     */
    notAuthorizedException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
