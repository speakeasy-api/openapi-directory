import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeregisterTypeActionEnum {
    DeregisterType = "DeregisterType"
}
export declare enum POSTDeregisterTypeVersionEnum {
    TwoThousandAndTen0515 = "2010-05-15"
}
export declare class POSTDeregisterTypeRequest extends SpeakeasyBase {
    action: POSTDeregisterTypeActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeregisterTypeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeregisterTypeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
