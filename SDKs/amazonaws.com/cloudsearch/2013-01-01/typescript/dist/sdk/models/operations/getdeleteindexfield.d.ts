import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteIndexFieldActionEnum {
    DeleteIndexField = "DeleteIndexField"
}
export declare enum GETDeleteIndexFieldVersionEnum {
    TwoThousandAndThirteen0101 = "2013-01-01"
}
export declare class GETDeleteIndexFieldRequest extends SpeakeasyBase {
    action: GETDeleteIndexFieldActionEnum;
    domainName: string;
    /**
     * The name of the index field your want to remove from the domain's indexing options.
     */
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
