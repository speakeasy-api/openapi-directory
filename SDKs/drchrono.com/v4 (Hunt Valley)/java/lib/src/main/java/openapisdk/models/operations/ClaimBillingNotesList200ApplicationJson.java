package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClaimBillingNotesList200ApplicationJson
 * Paginated Result
**/
public class ClaimBillingNotesList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ClaimBillingNotes[] data;
    public ClaimBillingNotesList200ApplicationJson withData(openapisdk.models.shared.ClaimBillingNotes[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ClaimBillingNotesList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ClaimBillingNotesList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}