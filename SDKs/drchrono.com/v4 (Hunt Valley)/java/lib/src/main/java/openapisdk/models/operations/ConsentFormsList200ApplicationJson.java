package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConsentFormsList200ApplicationJson
 * Paginated Result
**/
public class ConsentFormsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.ConsentForm[] data;
    public ConsentFormsList200ApplicationJson withData(openapisdk.models.shared.ConsentForm[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public ConsentFormsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public ConsentFormsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}