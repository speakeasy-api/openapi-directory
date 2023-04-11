import { SpeakeasyBase } from "../../../internal/utils";
import { DocumentAttributeValue } from "./documentattributevalue";
/**
 * A document attribute or metadata field. To create custom document attributes, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-attributes.html">Custom attributes</a>.
 */
export declare class DocumentAttribute extends SpeakeasyBase {
    key: string;
    value: DocumentAttributeValue;
}
