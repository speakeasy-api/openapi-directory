import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTIndexDocumentsActionEnum {
    IndexDocuments = "IndexDocuments"
}
export declare enum POSTIndexDocumentsVersionEnum {
    TwoThousandAndEleven0201 = "2011-02-01"
}
export declare class POSTIndexDocumentsRequest extends SpeakeasyBase {
    action: POSTIndexDocumentsActionEnum;
    requestBody?: Uint8Array;
    version: POSTIndexDocumentsVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTIndexDocumentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
