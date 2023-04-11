import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum ResetServiceSettingXAmzTargetEnum {
    AmazonSSMResetServiceSetting = "AmazonSSM.ResetServiceSetting"
}
export declare class ResetServiceSettingRequest extends SpeakeasyBase {
    resetServiceSettingRequest: shared.ResetServiceSettingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ResetServiceSettingXAmzTargetEnum;
}
export declare class ResetServiceSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * Success
     */
    resetServiceSettingResult?: shared.ResetServiceSettingResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceSettingNotFound
     */
    serviceSettingNotFound?: any;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
}
