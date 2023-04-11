import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataQualityRulesetXAmzTargetEnum {
    AWSGlueCreateDataQualityRuleset = "AWSGlue.CreateDataQualityRuleset"
}
export declare class CreateDataQualityRulesetRequest extends SpeakeasyBase {
    createDataQualityRulesetRequest: shared.CreateDataQualityRulesetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataQualityRulesetXAmzTargetEnum;
}
export declare class CreateDataQualityRulesetResponse extends SpeakeasyBase {
    /**
     * AlreadyExistsException
     */
    alreadyExistsException?: any;
    contentType: string;
    /**
     * Success
     */
    createDataQualityRulesetResponse?: shared.CreateDataQualityRulesetResponse;
    /**
     * InternalServiceException
     */
    internalServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * OperationTimeoutException
     */
    operationTimeoutException?: any;
    /**
     * ResourceNumberLimitExceededException
     */
    resourceNumberLimitExceededException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
