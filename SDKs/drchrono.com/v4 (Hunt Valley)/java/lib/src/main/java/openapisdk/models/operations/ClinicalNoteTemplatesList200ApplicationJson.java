package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClinicalNoteTemplatesList200ApplicationJson
 * Paginated Result
**/
public class ClinicalNoteTemplatesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.SoapNoteCustomReport[] data;
    public ClinicalNoteTemplatesList200ApplicationJson withData(openapisdk.models.shared.SoapNoteCustomReport[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ClinicalNoteTemplatesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ClinicalNoteTemplatesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}