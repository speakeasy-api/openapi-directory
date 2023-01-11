package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Links
 * Links to navigate to previous or next pages through the API
**/
public class Links {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current")
    public String current;
    public Links withCurrent(String current) {
        this.current = current;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public Links withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public Links withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}