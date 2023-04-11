import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * The type of analyzer.
 */
export declare enum ListAnalyzersTypeEnum {
    Account = "ACCOUNT",
    Organization = "ORGANIZATION"
}
export declare class ListAnalyzersRequest extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: number;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: string;
    /**
     * The type of analyzer.
     */
    type?: ListAnalyzersTypeEnum;
}
export declare class ListAnalyzersResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * Success
     */
    listAnalyzersResponse?: shared.ListAnalyzersResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
