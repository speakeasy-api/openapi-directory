import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTExitStandbyActionEnum {
    ExitStandby = "ExitStandby"
}
export declare enum POSTExitStandbyVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTExitStandbyRequest extends SpeakeasyBase {
    action: POSTExitStandbyActionEnum;
    requestBody?: Uint8Array;
    version: POSTExitStandbyVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTExitStandbyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
