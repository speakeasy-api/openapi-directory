import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetNotificationChannelXAmzTargetEnum {
    AWSFMS20180101GetNotificationChannel = "AWSFMS_20180101.GetNotificationChannel"
}
export declare class GetNotificationChannelRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetNotificationChannelXAmzTargetEnum;
}
export declare class GetNotificationChannelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getNotificationChannelResponse?: shared.GetNotificationChannelResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    /**
     * InvalidOperationException
     */
    invalidOperationException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
