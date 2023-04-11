import { SpeakeasyBase } from "../../../internal/utils";
import { Category } from "./category";
import { Links } from "./links";
import { Meta } from "./meta";
/**
 * Categories
 */
export declare class GetCategoriesResponse extends SpeakeasyBase {
    data: Category[];
    /**
     * Links to navigate to previous or next pages through the API
     */
    links?: Links;
    /**
     * Response metadata
     */
    meta?: Meta;
    /**
     * HTTP Response Status
     */
    status: string;
    /**
     * HTTP Response Status Code
     */
    statusCode: number;
}
