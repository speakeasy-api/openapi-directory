import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteLoggingConfigurationXAmzTargetEnum {
    AWSWAFRegional20161128DeleteLoggingConfiguration = "AWSWAF_Regional_20161128.DeleteLoggingConfiguration"
}
export declare class DeleteLoggingConfigurationRequest extends SpeakeasyBase {
    deleteLoggingConfigurationRequest: shared.DeleteLoggingConfigurationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteLoggingConfigurationXAmzTargetEnum;
}
export declare class DeleteLoggingConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteLoggingConfigurationResponse?: Record<string, any>;
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
     * WAFStaleDataException
     */
    wafStaleDataException?: any;
}
