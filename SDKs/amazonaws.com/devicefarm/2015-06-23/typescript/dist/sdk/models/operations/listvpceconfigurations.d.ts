import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ListVPCEConfigurationsXAmzTargetEnum {
    DeviceFarm20150623ListVPCEConfigurations = "DeviceFarm_20150623.ListVPCEConfigurations"
}
export declare class ListVPCEConfigurationsRequest extends SpeakeasyBase {
    listVPCEConfigurationsRequest: shared.ListVPCEConfigurationsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListVPCEConfigurationsXAmzTargetEnum;
}
export declare class ListVPCEConfigurationsResponse extends SpeakeasyBase {
    /**
     * ArgumentException
     */
    argumentException?: any;
    contentType: string;
    /**
     * Success
     */
    listVPCEConfigurationsResult?: shared.ListVPCEConfigurationsResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceAccountException
     */
    serviceAccountException?: any;
}
