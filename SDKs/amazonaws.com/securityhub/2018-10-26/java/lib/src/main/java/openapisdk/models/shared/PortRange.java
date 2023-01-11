package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortRange
 * A range of ports.
**/
public class PortRange {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Begin")
    public Long begin;
    public PortRange withBegin(Long begin) {
        this.begin = begin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("End")
    public Long end;
    public PortRange withEnd(Long end) {
        this.end = end;
        return this;
    }
}