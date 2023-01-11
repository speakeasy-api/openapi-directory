package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentsList200ApplicationJson
 * Paginated Result
**/
public class DocumentsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ScannedClinicalDocument[] data;
    public DocumentsList200ApplicationJson withData(openapisdk.models.shared.ScannedClinicalDocument[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public DocumentsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public DocumentsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}