import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateDhcpOptionsActionEnum {
    CreateDhcpOptions = "CreateDhcpOptions"
}
export declare enum POSTCreateDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTCreateDhcpOptionsRequest extends SpeakeasyBase {
    action: POSTCreateDhcpOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateDhcpOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateDhcpOptionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
