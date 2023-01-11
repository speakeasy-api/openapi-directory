import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ClinicalNoteClinicalNoteSectionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clinical_note_field" })
  clinicalNoteField?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ClinicalNoteClinicalNoteSection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clinical_note_template" })
  clinicalNoteTemplate?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=values", elemType: ClinicalNoteClinicalNoteSectionValue })
  values?: ClinicalNoteClinicalNoteSectionValue[];
}


export class ClinicalNote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appointment" })
  appointment?: string;

  @SpeakeasyMetadata({ data: "json, name=archived" })
  archived?: boolean;

  @SpeakeasyMetadata({ data: "json, name=clinical_note_sections", elemType: ClinicalNoteClinicalNoteSection })
  clinicalNoteSections?: ClinicalNoteClinicalNoteSection[];

  @SpeakeasyMetadata({ data: "json, name=patient" })
  patient?: string;
}
