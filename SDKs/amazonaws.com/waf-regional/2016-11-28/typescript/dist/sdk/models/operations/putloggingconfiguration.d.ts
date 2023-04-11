import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutLoggingConfigurationXAmzTargetEnum {
    AWSWAFRegional20161128PutLoggingConfiguration = "AWSWAF_Regional_20161128.PutLoggingConfiguration"
}
export declare class PutLoggingConfigurationRequest extends SpeakeasyBase {
    putLoggingConfigurationRequest: shared.PutLoggingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutLoggingConfigurationXAmzTargetEnum;
}
export declare class PutLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    putLoggingConfigurationResponse?: shared.PutLoggingConfigurationResponse;
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
    /**
     * WAFServiceLinkedRoleErrorException
     */
    wafServiceLinkedRoleErrorException?: any;
    /**
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
