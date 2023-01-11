package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CommLogsList200ApplicationJson
 * Paginated Result
**/
public class CommLogsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.PhoneCallLog[] data;
    public CommLogsList200ApplicationJson withData(openapisdk.models.shared.PhoneCallLog[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CommLogsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public CommLogsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}