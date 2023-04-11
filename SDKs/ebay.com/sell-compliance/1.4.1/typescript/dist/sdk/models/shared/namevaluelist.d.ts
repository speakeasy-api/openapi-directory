import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type is used to provide a name-value pair, including the identifying aspects of a product variation through the variationAspects container.
 */
export declare class NameValueList extends SpeakeasyBase {
    /**
     * This is the name of the variation aspect, or the name of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation.
     */
    name?: string;
    /**
     * This is the value of the variation aspect (in name field), or the value of the category of information that is returned through the name-value pair. The type of information that appears here will vary based on the compliance type and type of violation.
     */
    value?: string;
}
