import { SpeakeasyBase } from "../../../internal/utils";
import { Amount } from "./amount";
/**
 * A type that defines the fields for the <b>CreateAdGroup</b> request.
 */
export declare class CreateAdGroupRequest extends SpeakeasyBase {
    /**
     * A complex type that describes the value of a monetary amount as represented by a global currency.
     */
    defaultBid?: Amount;
    /**
     * The seller-defined name of the ad group.
     */
    name?: string;
}
