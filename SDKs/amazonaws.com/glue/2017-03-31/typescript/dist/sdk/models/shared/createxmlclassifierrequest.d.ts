import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies an XML classifier for <code>CreateClassifier</code> to create.
 */
export declare class CreateXMLClassifierRequest extends SpeakeasyBase {
    classification: string;
    name: string;
    rowTag?: string;
}
