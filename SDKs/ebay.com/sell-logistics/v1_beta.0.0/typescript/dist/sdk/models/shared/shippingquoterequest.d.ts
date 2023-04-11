import { SpeakeasyBase } from "../../../internal/utils";
import { Contact } from "./contact";
import { Order } from "./order";
import { PackageSpecification } from "./packagespecification";
/**
 * This complex type defines the request body for <b>createShippingQuote</b>. Sellers <i>request a quote</i> for a shipment by defining the "To" and "From" addresses for the package, plus the package's size.  <br><br>Carriers respond by offering up a "rate" for the service of theirs that best fits seller's needs.
 */
export declare class ShippingQuoteRequest extends SpeakeasyBase {
    /**
     * A seller-defined list that contains information about the orders in the package. This allows sellers to include information about the line items in the package with the shipment information.  <br><br>A package can contain any number of line items from one or more orders, providing they all ship in the same package.  <br><br><b>Maximum list size:</b> 10
     */
    orders?: Order[];
    /**
     * This complex type specifies the dimensions and weight of a package.
     */
    packageSpecification?: PackageSpecification;
    /**
     * This complex type contains contact information for an individual buyer or seller.
     */
    shipFrom?: Contact;
    /**
     * This complex type contains contact information for an individual buyer or seller.
     */
    shipTo?: Contact;
}
