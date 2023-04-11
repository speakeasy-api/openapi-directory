import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListLoggingConfigurationsXAmzTargetEnum {
    AWSWAFRegional20161128ListLoggingConfigurations = "AWSWAF_Regional_20161128.ListLoggingConfigurations"
}
export declare class ListLoggingConfigurationsRequest extends SpeakeasyBase {
    listLoggingConfigurationsRequest: shared.ListLoggingConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListLoggingConfigurationsXAmzTargetEnum;
}
export declare class ListLoggingConfigurationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    listLoggingConfigurationsResponse?: shared.ListLoggingConfigurationsResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * WAFInternalErrorException
     */
    wafInternalErrorException?: any;
    /**
     * WAFInvalidParameterException
     */
    wafInvalidParameterException?: any;
    /**
     * WAFNonexistentItemException
     */
    wafNonexistentItemException?: any;
}
