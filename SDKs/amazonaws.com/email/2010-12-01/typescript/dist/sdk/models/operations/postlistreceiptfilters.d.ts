import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTListReceiptFiltersActionEnum {
    ListReceiptFilters = "ListReceiptFilters"
}
export declare enum POSTListReceiptFiltersVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTListReceiptFiltersRequest extends SpeakeasyBase {
    action: POSTListReceiptFiltersActionEnum;
    requestBody?: Uint8Array;
    version: POSTListReceiptFiltersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTListReceiptFiltersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
