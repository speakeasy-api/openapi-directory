import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTContinueUpdateRollbackActionEnum {
    ContinueUpdateRollback = "ContinueUpdateRollback"
}
export declare enum POSTContinueUpdateRollbackVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTContinueUpdateRollbackRequest extends SpeakeasyBase {
    action: POSTContinueUpdateRollbackActionEnum;
    requestBody?: Uint8Array;
    version: POSTContinueUpdateRollbackVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTContinueUpdateRollbackResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
