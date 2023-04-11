import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDeleteDhcpOptionsActionEnum {
    DeleteDhcpOptions = "DeleteDhcpOptions"
}
export declare enum POSTDeleteDhcpOptionsVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDeleteDhcpOptionsRequest extends SpeakeasyBase {
    action: POSTDeleteDhcpOptionsActionEnum;
    requestBody?: Uint8Array;
    version: POSTDeleteDhcpOptionsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDeleteDhcpOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
