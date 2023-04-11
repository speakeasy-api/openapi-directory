import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetLoggingConfigurationXAmzTargetEnum {
    AWSWAF20150824GetLoggingConfiguration = "AWSWAF_20150824.GetLoggingConfiguration"
}
export declare class GetLoggingConfigurationRequest extends SpeakeasyBase {
    getLoggingConfigurationRequest: shared.GetLoggingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetLoggingConfigurationXAmzTargetEnum;
}
export declare class GetLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getLoggingConfigurationResponse?: shared.GetLoggingConfigurationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
