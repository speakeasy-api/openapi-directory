import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClinicalNoteClinicalNoteSectionValue extends SpeakeasyBase {
    clinicalNoteField?: number;
    id?: number;
    value?: string;
}
export declare class ClinicalNoteClinicalNoteSection extends SpeakeasyBase {
    clinicalNoteTemplate?: number;
    name?: string;
    values?: ClinicalNoteClinicalNoteSectionValue[];
}
/**
 * OK
 */
export declare class ClinicalNote extends SpeakeasyBase {
    appointment?: string;
    archived?: boolean;
    clinicalNoteSections?: ClinicalNoteClinicalNoteSection[];
    patient?: string;
}
