import { SpeakeasyBase } from "../../../internal/utils";
import { ProductModel } from "./productmodel";
/**
 * When the creation was successful.
 */
export declare class TagModel extends SpeakeasyBase {
    color?: string;
    name?: string;
    product?: ProductModel;
    tagId?: number;
}
