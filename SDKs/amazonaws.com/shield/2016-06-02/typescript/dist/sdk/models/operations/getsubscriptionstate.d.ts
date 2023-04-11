import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSubscriptionStateXAmzTargetEnum {
    AWSShield20160616GetSubscriptionState = "AWSShield_20160616.GetSubscriptionState"
}
export declare class GetSubscriptionStateRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSubscriptionStateXAmzTargetEnum;
}
export declare class GetSubscriptionStateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSubscriptionStateResponse?: shared.GetSubscriptionStateResponse;
    /**
     * InternalErrorException
     */
    internalErrorException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
