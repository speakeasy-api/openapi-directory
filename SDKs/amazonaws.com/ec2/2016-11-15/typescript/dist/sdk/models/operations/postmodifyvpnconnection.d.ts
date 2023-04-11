import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTModifyVpnConnectionActionEnum {
    ModifyVpnConnection = "ModifyVpnConnection"
}
export declare enum POSTModifyVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTModifyVpnConnectionRequest extends SpeakeasyBase {
    action: POSTModifyVpnConnectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTModifyVpnConnectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTModifyVpnConnectionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
