import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateReceiptFilterActionEnum {
    CreateReceiptFilter = "CreateReceiptFilter"
}
export declare enum POSTCreateReceiptFilterVersionEnum {
    TwoThousandAndTen1201 = "2010-12-01"
}
export declare class POSTCreateReceiptFilterRequest extends SpeakeasyBase {
    action: POSTCreateReceiptFilterActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateReceiptFilterVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateReceiptFilterResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
