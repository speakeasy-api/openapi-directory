import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTSetInstanceProtectionActionEnum {
    SetInstanceProtection = "SetInstanceProtection"
}
export declare enum POSTSetInstanceProtectionVersionEnum {
    TwoThousandAndEleven0101 = "2011-01-01"
}
export declare class POSTSetInstanceProtectionRequest extends SpeakeasyBase {
    action: POSTSetInstanceProtectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTSetInstanceProtectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTSetInstanceProtectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
