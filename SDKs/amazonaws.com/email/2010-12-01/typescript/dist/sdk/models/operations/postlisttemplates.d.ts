import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListTemplatesActionEnum {
    ListTemplates = "ListTemplates"
}
export declare enum POSTListTemplatesVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListTemplatesRequest extends SpeakeasyBase {
    action: POSTListTemplatesActionEnum;
    requestBody?: Uint8Array;
    version: POSTListTemplatesVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListTemplatesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
