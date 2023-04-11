import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListTokensXAmzTargetEnum {
    AWSLicenseManagerListTokens = "AWSLicenseManager.ListTokens"
}
export declare class ListTokensRequest extends SpeakeasyBase {
    listTokensRequest: shared.ListTokensRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTokensXAmzTargetEnum;
}
export declare class ListTokensResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    /**
     * AuthorizationException
     */
    authorizationException?: any;
    contentType: string;
    /**
     * Success
     */
    listTokensResponse?: shared.ListTokensResponse;
    /**
     * RateLimitExceededException
     */
    rateLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServerInternalException
     */
    serverInternalException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
