import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETIndexDocumentsActionEnum {
    IndexDocuments = "IndexDocuments"
}
export declare enum GETIndexDocumentsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class GETIndexDocumentsRequest extends SpeakeasyBase {
    action: GETIndexDocumentsActionEnum;
    domainName: string;
    version: GETIndexDocumentsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETIndexDocumentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
