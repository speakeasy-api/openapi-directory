import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateNotificationSettingsXAmzTargetEnum {
    MTurkRequesterServiceV20170117UpdateNotificationSettings = "MTurkRequesterServiceV20170117.UpdateNotificationSettings"
}
export declare class UpdateNotificationSettingsRequest extends SpeakeasyBase {
    updateNotificationSettingsRequest: shared.UpdateNotificationSettingsRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateNotificationSettingsXAmzTargetEnum;
}
export declare class UpdateNotificationSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    /**
     * Success
     */
    updateNotificationSettingsResponse?: Record<string, any>;
}
