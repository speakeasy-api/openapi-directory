import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductsGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultProductDto?: shared.PageResultProductDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
