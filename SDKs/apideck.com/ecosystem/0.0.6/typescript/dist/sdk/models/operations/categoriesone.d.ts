import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CategoriesOneRequest extends SpeakeasyBase {
    ecosystemId: string;
    /**
     * ID of the record you are acting upon.
     */
    id: string;
}
export declare class CategoriesOneResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Category
     */
    getCategoryResponse?: shared.GetCategoryResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
