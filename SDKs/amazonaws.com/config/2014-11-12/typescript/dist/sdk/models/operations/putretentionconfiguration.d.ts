import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutRetentionConfigurationXAmzTargetEnum {
    StarlingDoveServicePutRetentionConfiguration = "StarlingDoveService.PutRetentionConfiguration"
}
export declare class PutRetentionConfigurationRequest extends SpeakeasyBase {
    putRetentionConfigurationRequest: shared.PutRetentionConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutRetentionConfigurationXAmzTargetEnum;
}
export declare class PutRetentionConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InvalidParameterValueException
     */
    invalidParameterValueException?: any;
    /**
     * MaxNumberOfRetentionConfigurationsExceededException
     */
    maxNumberOfRetentionConfigurationsExceededException?: any;
    /**
     * Success
     */
    putRetentionConfigurationResponse?: shared.PutRetentionConfigurationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
