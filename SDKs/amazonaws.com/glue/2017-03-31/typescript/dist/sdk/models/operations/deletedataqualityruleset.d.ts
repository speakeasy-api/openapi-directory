import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDataQualityRulesetXAmzTargetEnum {
    AWSGlueDeleteDataQualityRuleset = "AWSGlue.DeleteDataQualityRuleset"
}
export declare class DeleteDataQualityRulesetRequest extends SpeakeasyBase {
    deleteDataQualityRulesetRequest: shared.DeleteDataQualityRulesetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataQualityRulesetXAmzTargetEnum;
}
export declare class DeleteDataQualityRulesetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteDataQualityRulesetResponse?: Record<string, any>;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
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
    statusCode: number;
    rawResponse?: AxiosResponse;
}
