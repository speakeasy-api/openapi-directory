import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListFunctionsRequest extends SpeakeasyBase {
    /**
     * Optional string. An opaque pagination token returned from a previous <code>ListFunctions</code> operation. If present, indicates where to continue the listing.
     */
    marker?: string;
    /**
     * Optional integer. Specifies the maximum number of AWS Lambda functions to return in response. This parameter value must be greater than 0.
     */
    maxItems?: number;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listFunctionsResponse?: shared.ListFunctionsResponse;
    /**
     * ServiceException
     */
    serviceException?: shared.ServiceException;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
