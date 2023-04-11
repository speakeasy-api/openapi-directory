import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The XML file description
 */
export declare class InputFileReadXmlConfiguration extends SpeakeasyBase {
    /**
     * Indicate if the children xml nodes should be flatten with there parent to take in account the sub node values.
     */
    flattenXmlChildElements: boolean;
    /**
     * Indicate if the importation should take in account the attribute in the xml nodes.
     */
    useXmlAttributes: boolean;
}
