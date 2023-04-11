import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTImportImageActionEnum {
    ImportImage = "ImportImage"
}
export declare enum POSTImportImageVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTImportImageRequest extends SpeakeasyBase {
    action: POSTImportImageActionEnum;
    requestBody?: Uint8Array;
    version: POSTImportImageVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTImportImageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
