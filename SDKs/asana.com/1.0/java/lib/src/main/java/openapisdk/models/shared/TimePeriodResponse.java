package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimePeriodResponse
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class TimePeriodResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_on")
    public String endOn;
    public TimePeriodResponse withEndOn(String endOn) {
        this.endOn = endOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TimePeriodResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent")
    public TimePeriodCompact parent;
    public TimePeriodResponse withParent(TimePeriodCompact parent) {
        this.parent = parent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public TimePeriodResponsePeriodEnum period;
    public TimePeriodResponse withPeriod(TimePeriodResponsePeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TimePeriodResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public String startOn;
    public TimePeriodResponse withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
}