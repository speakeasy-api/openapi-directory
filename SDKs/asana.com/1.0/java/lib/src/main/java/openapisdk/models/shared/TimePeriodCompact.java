package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimePeriodCompact
 * A generic Asana Resource, containing a globally unique identifier.
**/
public class TimePeriodCompact {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_on")
    public String endOn;
    public TimePeriodCompact withEndOn(String endOn) {
        this.endOn = endOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public TimePeriodCompact withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("period")
    public TimePeriodCompactPeriodEnum period;
    public TimePeriodCompact withPeriod(TimePeriodCompactPeriodEnum period) {
        this.period = period;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public TimePeriodCompact withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_on")
    public String startOn;
    public TimePeriodCompact withStartOn(String startOn) {
        this.startOn = startOn;
        return this;
    }
}