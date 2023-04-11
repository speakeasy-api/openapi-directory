import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeprovisionByoipCidrActionEnum {
    DeprovisionByoipCidr = "DeprovisionByoipCidr"
}
export declare enum POSTDeprovisionByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeprovisionByoipCidrRequest extends SpeakeasyBase {
    action: POSTDeprovisionByoipCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeprovisionByoipCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeprovisionByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
