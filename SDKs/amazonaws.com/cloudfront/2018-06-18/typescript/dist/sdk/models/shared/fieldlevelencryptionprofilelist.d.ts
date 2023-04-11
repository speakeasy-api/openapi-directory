import { SpeakeasyBase } from "../../../internal/utils";
import { FieldLevelEncryptionProfileSummaryList } from "./fieldlevelencryptionprofilesummarylist";
/**
 * List of field-level encryption profiles.
 */
export declare class FieldLevelEncryptionProfileList extends SpeakeasyBase {
    items?: FieldLevelEncryptionProfileSummaryList[];
    maxItems: number;
    nextMarker?: string;
    quantity: number;
}
