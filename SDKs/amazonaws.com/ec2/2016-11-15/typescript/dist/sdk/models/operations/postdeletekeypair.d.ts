import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteKeyPairActionEnum {
    DeleteKeyPair = "DeleteKeyPair"
}
export declare enum POSTDeleteKeyPairVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteKeyPairRequest extends SpeakeasyBase {
    action: POSTDeleteKeyPairActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteKeyPairVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
