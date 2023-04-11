import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyPrivateDnsNameOptionsActionEnum {
    ModifyPrivateDnsNameOptions = "ModifyPrivateDnsNameOptions"
}
export declare enum POSTModifyPrivateDnsNameOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyPrivateDnsNameOptionsRequest extends SpeakeasyBase {
    action: POSTModifyPrivateDnsNameOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyPrivateDnsNameOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyPrivateDnsNameOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
