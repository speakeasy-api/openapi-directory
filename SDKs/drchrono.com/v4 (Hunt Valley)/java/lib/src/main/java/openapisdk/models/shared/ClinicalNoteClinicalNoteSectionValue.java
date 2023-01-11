package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ClinicalNoteClinicalNoteSectionValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clinical_note_field")
    public Long clinicalNoteField;
    public ClinicalNoteClinicalNoteSectionValue withClinicalNoteField(Long clinicalNoteField) {
        this.clinicalNoteField = clinicalNoteField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ClinicalNoteClinicalNoteSectionValue withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ClinicalNoteClinicalNoteSectionValue withValue(String value) {
        this.value = value;
        return this;
    }
}