import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductApiAllRequest extends SpeakeasyBase {
    queryOptionsPage?: number;
    queryOptionsPageSize?: number;
    xAuthKey: string;
    xAuthSecret: string;
}
export declare class ProductApiAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    listResultProductDetailsApiModel?: shared.ListResultProductDetailsApiModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
