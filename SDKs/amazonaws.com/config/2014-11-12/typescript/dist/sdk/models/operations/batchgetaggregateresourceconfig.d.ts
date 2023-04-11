import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetAggregateResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetAggregateResourceConfig = "StarlingDoveService.BatchGetAggregateResourceConfig"
}
export declare class BatchGetAggregateResourceConfigRequest extends SpeakeasyBase {
    batchGetAggregateResourceConfigRequest: shared.BatchGetAggregateResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetAggregateResourceConfigXAmzTargetEnum;
}
export declare class BatchGetAggregateResourceConfigResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetAggregateResourceConfigResponse?: shared.BatchGetAggregateResourceConfigResponse;
    contentType: string;
    /**
     * NoSuchConfigurationAggregatorException
     */
    noSuchConfigurationAggregatorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
