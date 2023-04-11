import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteIndexFieldActionEnum {
    DeleteIndexField = "DeleteIndexField"
}
export declare enum GETDeleteIndexFieldVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETDeleteIndexFieldRequest extends SpeakeasyBase {
    action: GETDeleteIndexFieldActionEnum;
    domainName: string;
    indexFieldName: string;
    version: GETDeleteIndexFieldVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteIndexFieldResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
