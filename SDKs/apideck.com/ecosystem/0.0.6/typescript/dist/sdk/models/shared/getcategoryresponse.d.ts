import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
/**
 * Category
 */
export declare class GetCategoryResponse extends SpeakeasyBase {
    data: Category;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
