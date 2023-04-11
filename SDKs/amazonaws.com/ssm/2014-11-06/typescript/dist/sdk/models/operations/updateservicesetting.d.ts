import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateServiceSettingXAmzTargetEnum {
    AmazonSSMUpdateServiceSetting = "AmazonSSM.UpdateServiceSetting"
}
export declare class UpdateServiceSettingRequest extends SpeakeasyBase {
    updateServiceSettingRequest: shared.UpdateServiceSettingRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceSettingXAmzTargetEnum;
}
export declare class UpdateServiceSettingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ServiceSettingNotFound
     */
    serviceSettingNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
    /**
     * Success
     */
    updateServiceSettingResult?: Record<string, any>;
}
