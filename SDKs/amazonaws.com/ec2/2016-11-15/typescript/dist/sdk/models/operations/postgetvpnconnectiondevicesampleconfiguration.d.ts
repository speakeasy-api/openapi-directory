import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTGetVpnConnectionDeviceSampleConfigurationActionEnum {
    GetVpnConnectionDeviceSampleConfiguration = "GetVpnConnectionDeviceSampleConfiguration"
}
export declare enum POSTGetVpnConnectionDeviceSampleConfigurationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTGetVpnConnectionDeviceSampleConfigurationRequest extends SpeakeasyBase {
    action: POSTGetVpnConnectionDeviceSampleConfigurationActionEnum;
    requestBody?: Uint8Array;
    version: POSTGetVpnConnectionDeviceSampleConfigurationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTGetVpnConnectionDeviceSampleConfigurationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
