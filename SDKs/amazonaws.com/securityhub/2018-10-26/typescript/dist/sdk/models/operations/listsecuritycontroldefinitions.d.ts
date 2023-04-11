import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListSecurityControlDefinitionsRequest extends SpeakeasyBase {
    /**
     *  An optional parameter that limits the total results of the API response to the specified number. If this parameter isn't provided in the request, the results include the first 25 security controls that apply to the specified standard. The results also include a <code>NextToken</code> parameter that you can use in a subsequent API call to get the next 25 controls. This repeats until all controls for the standard are returned.
     */
    maxResults?: number;
    /**
     *  Optional pagination parameter.
     */
    nextToken?: string;
    /**
     *  The Amazon Resource Name (ARN) of the standard that you want to view controls for.
     */
    standardsArn?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSecurityControlDefinitionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalException
     */
    internalException?: any;
    /**
     * InvalidAccessException
     */
    invalidAccessException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * Success
     */
    listSecurityControlDefinitionsResponse?: shared.ListSecurityControlDefinitionsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
