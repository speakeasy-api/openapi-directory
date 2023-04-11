import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteVpnConnectionActionEnum {
    DeleteVpnConnection = "DeleteVpnConnection"
}
export declare enum POSTDeleteVpnConnectionVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteVpnConnectionRequest extends SpeakeasyBase {
    action: POSTDeleteVpnConnectionActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteVpnConnectionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteVpnConnectionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
