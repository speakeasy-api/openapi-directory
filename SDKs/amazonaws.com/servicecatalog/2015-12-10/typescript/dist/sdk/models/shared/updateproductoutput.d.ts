import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewDetail } from "./productviewdetail";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class UpdateProductOutput extends SpeakeasyBase {
    productViewDetail?: ProductViewDetail;
    tags?: Tag[];
}
