import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETListReceiptFiltersActionEnum {
    ListReceiptFilters = "ListReceiptFilters"
}
export declare enum GETListReceiptFiltersVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETListReceiptFiltersRequest extends SpeakeasyBase {
    action: GETListReceiptFiltersActionEnum;
    version: GETListReceiptFiltersVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETListReceiptFiltersResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
