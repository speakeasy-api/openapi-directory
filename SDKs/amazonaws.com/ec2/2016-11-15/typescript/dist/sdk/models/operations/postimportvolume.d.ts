import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTImportVolumeActionEnum {
    ImportVolume = "ImportVolume"
}
export declare enum POSTImportVolumeVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTImportVolumeRequest extends SpeakeasyBase {
    action: POSTImportVolumeActionEnum;
    requestBody?: Uint8Array;
    version: POSTImportVolumeVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTImportVolumeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
