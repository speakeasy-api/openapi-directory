package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClinicalNoteFieldValuesList200ApplicationJson
 * Paginated Result
**/
public class ClinicalNoteFieldValuesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.SoapNoteLineItemFieldValue[] data;
    public ClinicalNoteFieldValuesList200ApplicationJson withData(openapisdk.models.shared.SoapNoteLineItemFieldValue[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ClinicalNoteFieldValuesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ClinicalNoteFieldValuesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}