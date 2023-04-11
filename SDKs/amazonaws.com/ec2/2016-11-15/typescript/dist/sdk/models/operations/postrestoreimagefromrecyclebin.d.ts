import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTRestoreImageFromRecycleBinActionEnum {
    RestoreImageFromRecycleBin = "RestoreImageFromRecycleBin"
}
export declare enum POSTRestoreImageFromRecycleBinVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTRestoreImageFromRecycleBinRequest extends SpeakeasyBase {
    action: POSTRestoreImageFromRecycleBinActionEnum;
    requestBody?: Uint8Array;
    version: POSTRestoreImageFromRecycleBinVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTRestoreImageFromRecycleBinResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
