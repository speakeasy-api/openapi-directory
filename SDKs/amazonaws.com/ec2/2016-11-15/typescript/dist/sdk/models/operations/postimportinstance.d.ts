import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTImportInstanceActionEnum {
    ImportInstance = "ImportInstance"
}
export declare enum POSTImportInstanceVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTImportInstanceRequest extends SpeakeasyBase {
    action: POSTImportInstanceActionEnum;
    requestBody?: Uint8Array;
    version: POSTImportInstanceVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTImportInstanceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
