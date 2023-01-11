package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClinicalNoteClinicalNoteSection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note_template")
    public Long clinicalNoteTemplate;
    public ClinicalNoteClinicalNoteSection withClinicalNoteTemplate(Long clinicalNoteTemplate) {
        this.clinicalNoteTemplate = clinicalNoteTemplate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ClinicalNoteClinicalNoteSection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public ClinicalNoteClinicalNoteSectionValue[] values;
    public ClinicalNoteClinicalNoteSection withValues(ClinicalNoteClinicalNoteSectionValue[] values) {
        this.values = values;
        return this;
    }
}