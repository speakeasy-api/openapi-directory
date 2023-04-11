import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListResourceInventoryXAmzTargetEnum {
    AWSLicenseManagerListResourceInventory = "AWSLicenseManager.ListResourceInventory"
}
export declare class ListResourceInventoryRequest extends SpeakeasyBase {
    listResourceInventoryRequest: shared.ListResourceInventoryRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListResourceInventoryXAmzTargetEnum;
}
export declare class ListResourceInventoryResponse extends SpeakeasyBase {
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
     * FailedDependencyException
     */
    failedDependencyException?: any;
    /**
     * FilterLimitExceededException
     */
    filterLimitExceededException?: any;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * Success
     */
    listResourceInventoryResponse?: shared.ListResourceInventoryResponse;
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
}
