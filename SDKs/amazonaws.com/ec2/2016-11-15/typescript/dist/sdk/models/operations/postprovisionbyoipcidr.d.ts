import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTProvisionByoipCidrActionEnum {
    ProvisionByoipCidr = "ProvisionByoipCidr"
}
export declare enum POSTProvisionByoipCidrVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTProvisionByoipCidrRequest extends SpeakeasyBase {
    action: POSTProvisionByoipCidrActionEnum;
    requestBody?: Uint8Array;
    version: POSTProvisionByoipCidrVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTProvisionByoipCidrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
