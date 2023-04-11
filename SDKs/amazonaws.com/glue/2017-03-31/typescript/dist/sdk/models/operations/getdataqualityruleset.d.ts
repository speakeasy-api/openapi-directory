import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDataQualityRulesetXAmzTargetEnum {
    AWSGlueGetDataQualityRuleset = "AWSGlue.GetDataQualityRuleset"
}
export declare class GetDataQualityRulesetRequest extends SpeakeasyBase {
    getDataQualityRulesetRequest: shared.GetDataQualityRulesetRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDataQualityRulesetXAmzTargetEnum;
}
export declare class GetDataQualityRulesetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * EntityNotFoundException
     */
    entityNotFoundException?: any;
    /**
     * Success
     */
    getDataQualityRulesetResponse?: shared.GetDataQualityRulesetResponse;
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
