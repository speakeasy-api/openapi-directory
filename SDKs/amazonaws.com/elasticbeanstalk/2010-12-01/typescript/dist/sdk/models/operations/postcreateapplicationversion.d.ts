import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateApplicationVersionActionEnum {
    CreateApplicationVersion = "CreateApplicationVersion"
}
export declare enum POSTCreateApplicationVersionVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateApplicationVersionRequest extends SpeakeasyBase {
    action: POSTCreateApplicationVersionActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateApplicationVersionVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateApplicationVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
