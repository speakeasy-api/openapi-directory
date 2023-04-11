import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VatCategoriesGetResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    pageResultVatCategoryDto?: shared.PageResultVatCategoryDto;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
