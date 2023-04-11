import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETDeleteReceiptFilterActionEnum {
    DeleteReceiptFilter = "DeleteReceiptFilter"
}
export declare enum GETDeleteReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class GETDeleteReceiptFilterRequest extends SpeakeasyBase {
    action: GETDeleteReceiptFilterActionEnum;
    /**
     * The name of the IP address filter to delete.
     */
    filterName: string;
    version: GETDeleteReceiptFilterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETDeleteReceiptFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
