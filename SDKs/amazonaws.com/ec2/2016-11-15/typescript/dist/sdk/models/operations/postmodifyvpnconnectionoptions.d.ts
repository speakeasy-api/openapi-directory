import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpnConnectionOptionsActionEnum {
    ModifyVpnConnectionOptions = "ModifyVpnConnectionOptions"
}
export declare enum POSTModifyVpnConnectionOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpnConnectionOptionsRequest extends SpeakeasyBase {
    action: POSTModifyVpnConnectionOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpnConnectionOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpnConnectionOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
