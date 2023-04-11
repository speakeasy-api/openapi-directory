import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This type contains the name-value specifics of a multi-variation listing that has been bought.
 */
export declare class NameValuePair extends SpeakeasyBase {
    /**
     * The text representing the name of the aspect for the name-value pair. For example, <code>color</code>.
     */
    name?: string;
    /**
     * The value of the aspect for the name-value pair. For example, <code>red</code>.
     */
    value?: string;
}
