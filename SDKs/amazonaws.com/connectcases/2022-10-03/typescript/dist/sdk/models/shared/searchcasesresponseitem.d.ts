import { SpeakeasyBase } from "../../../internal/utils";
import { FieldValue } from "./fieldvalue";
/**
 * A list of items that represent cases.
 */
export declare class SearchCasesResponseItem extends SpeakeasyBase {
    caseId: string;
    fields: FieldValue[];
    tags?: Record<string, string>;
    templateId: string;
}
