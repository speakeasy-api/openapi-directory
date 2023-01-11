package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClinicalNotesList200ApplicationJson
 * Paginated Result
**/
public class ClinicalNotesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ClinicalNote[] data;
    public ClinicalNotesList200ApplicationJson withData(openapisdk.models.shared.ClinicalNote[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ClinicalNotesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ClinicalNotesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}