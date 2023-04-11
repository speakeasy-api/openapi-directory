import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetAccountBalanceXAmzTargetEnum {
    MTurkRequesterServiceV20170117GetAccountBalance = "MTurkRequesterServiceV20170117.GetAccountBalance"
}
export declare class GetAccountBalanceRequest extends SpeakeasyBase {
    requestBody: Record<string, any>;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetAccountBalanceXAmzTargetEnum;
}
export declare class GetAccountBalanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getAccountBalanceResponse?: shared.GetAccountBalanceResponse;
    /**
     * RequestError
     */
    requestError?: any;
    /**
     * ServiceFault
     */
    serviceFault?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
