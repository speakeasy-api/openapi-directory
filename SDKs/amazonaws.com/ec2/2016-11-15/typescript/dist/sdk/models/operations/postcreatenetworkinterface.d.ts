import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateNetworkInterfaceActionEnum {
    CreateNetworkInterface = "CreateNetworkInterface"
}
export declare enum POSTCreateNetworkInterfaceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateNetworkInterfaceRequest extends SpeakeasyBase {
    action: POSTCreateNetworkInterfaceActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateNetworkInterfaceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateNetworkInterfaceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
