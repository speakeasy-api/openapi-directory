import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The basic information related to a product
**/
export declare class TrackedOrderProduct extends SpeakeasyBase {
    margin: number;
    productExists: boolean;
    productId: string;
    productImageUrl: string;
    productSku: string;
    productTitle: string;
    quantity: number;
    unitPrice: number;
}
