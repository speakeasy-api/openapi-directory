import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateBatchRequestBodyOperationEnum {
    Whois = "whois",
    Check = "check"
}
export declare enum CreateBatchRequestBodyOptionsFormatEnum {
    Raw = "raw",
    Formatted = "formatted",
    Json = "json"
}
export declare class CreateBatchRequestBodyOptions extends SpeakeasyBase {
    format?: CreateBatchRequestBodyOptionsFormatEnum;
}
export declare class CreateBatchRequestBody extends SpeakeasyBase {
    domains: string[];
    operation: CreateBatchRequestBodyOperationEnum;
    options?: CreateBatchRequestBodyOptions;
}
export declare class CreateBatchResponse extends SpeakeasyBase {
    /**
     * OK
     */
    batch?: shared.Batch;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
