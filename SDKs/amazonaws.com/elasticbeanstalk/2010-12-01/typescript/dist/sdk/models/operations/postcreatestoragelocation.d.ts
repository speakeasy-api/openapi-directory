import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateStorageLocationActionEnum {
    CreateStorageLocation = "CreateStorageLocation"
}
export declare enum POSTCreateStorageLocationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateStorageLocationRequest extends SpeakeasyBase {
    action: POSTCreateStorageLocationActionEnum;
    version: POSTCreateStorageLocationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateStorageLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
