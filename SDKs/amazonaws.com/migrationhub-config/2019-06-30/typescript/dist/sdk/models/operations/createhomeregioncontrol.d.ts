import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateHomeRegionControlXAmzTargetEnum {
    AWSMigrationHubMultiAccountServiceCreateHomeRegionControl = "AWSMigrationHubMultiAccountService.CreateHomeRegionControl"
}
export declare class CreateHomeRegionControlRequest extends SpeakeasyBase {
    createHomeRegionControlRequest: shared.CreateHomeRegionControlRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateHomeRegionControlXAmzTargetEnum;
}
export declare class CreateHomeRegionControlResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * Success
     */
    createHomeRegionControlResult?: shared.CreateHomeRegionControlResult;
    /**
     * DryRunOperation
     */
    dryRunOperation?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceUnavailableException
     */
    serviceUnavailableException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
