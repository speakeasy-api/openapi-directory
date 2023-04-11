import { SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionSummaryList } from "./fieldlevelencryptionsummarylist";
/**
 * List of field-level encrpytion configurations.
 */
export declare class FieldLevelEncryptionList extends SpeakeasyBase {
    items?: FieldLevelEncryptionSummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
