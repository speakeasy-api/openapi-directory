import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTExportImageActionEnum {
    ExportImage = "ExportImage"
}
export declare enum POSTExportImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTExportImageRequest extends SpeakeasyBase {
    action: POSTExportImageActionEnum;
    requestBody?: Uint8Array;
    version: POSTExportImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTExportImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
