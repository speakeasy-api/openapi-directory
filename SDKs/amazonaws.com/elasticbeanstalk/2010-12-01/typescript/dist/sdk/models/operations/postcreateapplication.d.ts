import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateApplicationActionEnum {
    CreateApplication = "CreateApplication"
}
export declare enum POSTCreateApplicationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateApplicationRequest extends SpeakeasyBase {
    action: POSTCreateApplicationActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateApplicationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
