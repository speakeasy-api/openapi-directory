import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTEnterStandbyActionEnum {
    EnterStandby = "EnterStandby"
}
export declare enum POSTEnterStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTEnterStandbyRequest extends SpeakeasyBase {
    action: POSTEnterStandbyActionEnum;
    requestBody?: Uint8Array;
    version: POSTEnterStandbyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTEnterStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
