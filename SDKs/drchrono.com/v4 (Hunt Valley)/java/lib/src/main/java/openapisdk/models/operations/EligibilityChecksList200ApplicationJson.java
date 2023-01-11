package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EligibilityChecksList200ApplicationJson
 * Paginated Result
**/
public class EligibilityChecksList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.Coverage[] data;
    public EligibilityChecksList200ApplicationJson withData(openapisdk.models.shared.Coverage[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public EligibilityChecksList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public EligibilityChecksList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}