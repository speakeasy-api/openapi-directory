import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum BatchGetResourceConfigXAmzTargetEnum {
    StarlingDoveServiceBatchGetResourceConfig = "StarlingDoveService.BatchGetResourceConfig"
}
export declare class BatchGetResourceConfigRequest extends SpeakeasyBase {
    batchGetResourceConfigRequest: shared.BatchGetResourceConfigRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: BatchGetResourceConfigXAmzTargetEnum;
}
export declare class BatchGetResourceConfigResponse extends SpeakeasyBase {
    /**
     * Success
     */
    batchGetResourceConfigResponse?: shared.BatchGetResourceConfigResponse;
    contentType: string;
    /**
     * NoAvailableConfigurationRecorderException
     */
    noAvailableConfigurationRecorderException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
