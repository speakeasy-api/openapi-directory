package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomVitalsList200ApplicationJson
 * Paginated Result
**/
public class CustomVitalsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomVitalType[] data;
    public CustomVitalsList200ApplicationJson withData(openapisdk.models.shared.CustomVitalType[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CustomVitalsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public CustomVitalsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}