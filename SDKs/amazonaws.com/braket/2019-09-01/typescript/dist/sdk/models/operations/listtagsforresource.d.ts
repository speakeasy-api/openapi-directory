import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListTagsForResourceRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * Specify the <code>resourceArn</code> for the resource whose tags to display.
     */
    resourceArn: string;
}
export declare class ListTagsForResourceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * Success
     */
    listTagsForResourceResponse?: shared.ListTagsForResourceResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
