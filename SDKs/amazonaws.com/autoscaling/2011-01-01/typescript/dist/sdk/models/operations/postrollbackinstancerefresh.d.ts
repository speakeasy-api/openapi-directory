import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRollbackInstanceRefreshActionEnum {
    RollbackInstanceRefresh = "RollbackInstanceRefresh"
}
export declare enum POSTRollbackInstanceRefreshVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTRollbackInstanceRefreshRequest extends SpeakeasyBase {
    action: POSTRollbackInstanceRefreshActionEnum;
    requestBody?: Uint8Array;
    version: POSTRollbackInstanceRefreshVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRollbackInstanceRefreshResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
