import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetServiceSettingXAmzTargetEnum {
    AmazonSSMGetServiceSetting = "AmazonSSM.GetServiceSetting"
}
export declare class GetServiceSettingRequest extends SpeakeasyBase {
    getServiceSettingRequest: shared.GetServiceSettingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetServiceSettingXAmzTargetEnum;
}
export declare class GetServiceSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getServiceSettingResult?: shared.GetServiceSettingResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceSettingNotFound
     */
    serviceSettingNotFound?: any;
}
