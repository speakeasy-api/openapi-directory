import { SpeakeasyBase } from "../../../internal/utils";
import { ItemPurchase } from "./itempurchase";
import { PlanPurchase } from "./planpurchase";
export declare class Purchase extends SpeakeasyBase {
    /**
     * The date the purchase was authorized.
     */
    authorizationDate?: Date;
    /**
     * The date the purchase was created.
     */
    creationDate: Date;
    /**
     * The currency code used to make the purchase.
     */
    currency: string;
    /**
     * The identifier of the purchase.
     */
    id: string;
    item?: ItemPurchase;
    /**
     * The identifier of the payment method used to make the purchase.
     */
    paymentMethodId?: string;
    plan?: PlanPurchase;
    /**
     * The total cost of the purchase.
     */
    total: number;
}
