import { SpeakeasyBase } from "../../../internal/utils";
import { ProductViewSummary } from "./productviewsummary";
import { SourceConnectionDetail } from "./sourceconnectiondetail";
import { StatusEnum } from "./statusenum";
/**
 * Information about a product view.
 */
export declare class ProductViewDetail extends SpeakeasyBase {
    createdTime?: Date;
    productARN?: string;
    productViewSummary?: ProductViewSummary;
    sourceConnection?: SourceConnectionDetail;
    status?: StatusEnum;
}
