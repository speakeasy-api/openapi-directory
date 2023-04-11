import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum PutNotificationChannelXAmzTargetEnum {
    AWSFMS20180101PutNotificationChannel = "AWSFMS_20180101.PutNotificationChannel"
}
export declare class PutNotificationChannelRequest extends SpeakeasyBase {
    putNotificationChannelRequest: shared.PutNotificationChannelRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: PutNotificationChannelXAmzTargetEnum;
}
export declare class PutNotificationChannelResponse extends SpeakeasyBase {
    contentType: string;
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
