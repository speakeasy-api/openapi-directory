import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SendBonusXAmzTargetEnum {
    MTurkRequesterServiceV20170117SendBonus = "MTurkRequesterServiceV20170117.SendBonus"
}
export declare class SendBonusRequest extends SpeakeasyBase {
    sendBonusRequest: shared.SendBonusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SendBonusXAmzTargetEnum;
}
export declare class SendBonusResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * Success
     */
    sendBonusResponse?: Record<string, any>;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
