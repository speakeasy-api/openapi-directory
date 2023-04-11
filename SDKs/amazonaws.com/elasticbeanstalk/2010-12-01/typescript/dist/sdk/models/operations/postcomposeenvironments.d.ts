import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTComposeEnvironmentsActionEnum {
    ComposeEnvironments = "ComposeEnvironments"
}
export declare enum POSTComposeEnvironmentsVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTComposeEnvironmentsRequest extends SpeakeasyBase {
    action: POSTComposeEnvironmentsActionEnum;
    requestBody?: Uint8Array;
    version: POSTComposeEnvironmentsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTComposeEnvironmentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
