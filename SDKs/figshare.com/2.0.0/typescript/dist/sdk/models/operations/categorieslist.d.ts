import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CategoriesListResponse extends SpeakeasyBase {
    /**
     * OK. An array of categories
     */
    categories?: shared.Category[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
