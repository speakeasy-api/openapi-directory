import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetInstanceHealthActionEnum {
    SetInstanceHealth = "SetInstanceHealth"
}
export declare enum POSTSetInstanceHealthVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTSetInstanceHealthRequest extends SpeakeasyBase {
    action: POSTSetInstanceHealthActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetInstanceHealthVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetInstanceHealthResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
