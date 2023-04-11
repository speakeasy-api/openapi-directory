import { SpeakeasyBase } from "../../../internal/utils";
import { Content } from "./content";
/**
 * Represents the body of the message. You can specify text, HTML, or both. If you use both, then the message should display correctly in the widest variety of email clients.
 */
export declare class Body extends SpeakeasyBase {
    html?: Content;
    text?: Content;
}
