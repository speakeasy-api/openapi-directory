import { SpeakeasyBase } from "../../../internal/utils";
import { NameValueList } from "./namevaluelist";
/**
 * This type is used to identify the product variation that has the listing violation.
 */
export declare class VariationDetails extends SpeakeasyBase {
    /**
     * The seller-defined SKU value of the variation within the multiple-variation listing with the violation{s). This field is only returned if a seller-defined SKU value is defined for the variation. SKU values are optional in listing except when creating listings using the Inventory API.
     */
    sku?: string;
    /**
     * An array of one or more variation aspects that define a variation within a multiple-variation listing. The aspect{s) returned here define the individual variation, because these aspects will differ for each variation. Common varying aspects include color and size.
     */
    variationAspects?: NameValueList[];
}
