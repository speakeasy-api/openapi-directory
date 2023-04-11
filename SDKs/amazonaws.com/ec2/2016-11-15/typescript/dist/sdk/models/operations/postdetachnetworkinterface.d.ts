import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDetachNetworkInterfaceActionEnum {
    DetachNetworkInterface = "DetachNetworkInterface"
}
export declare enum POSTDetachNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDetachNetworkInterfaceRequest extends SpeakeasyBase {
    action: POSTDetachNetworkInterfaceActionEnum;
    requestBody?: Uint8Array;
    version: POSTDetachNetworkInterfaceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDetachNetworkInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
