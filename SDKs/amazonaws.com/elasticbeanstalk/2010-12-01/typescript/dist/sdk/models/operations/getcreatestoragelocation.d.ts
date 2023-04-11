import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETCreateStorageLocationActionEnum {
    CreateStorageLocation = "CreateStorageLocation"
}
export declare enum GETCreateStorageLocationVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETCreateStorageLocationRequest extends SpeakeasyBase {
    action: GETCreateStorageLocationActionEnum;
    version: GETCreateStorageLocationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETCreateStorageLocationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
