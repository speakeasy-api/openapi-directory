package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * HomeRegionControl
 * A home region control is an object that specifies the home region for an account, with some additional information. It contains a target (always of type <code>ACCOUNT</code>), an ID, and a time at which the home region was set.
**/
public class HomeRegionControl {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ControlId")
    public String controlId;
    public HomeRegionControl withControlId(String controlId) {
        this.controlId = controlId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HomeRegion")
    public String homeRegion;
    public HomeRegionControl withHomeRegion(String homeRegion) {
        this.homeRegion = homeRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("RequestedTime")
    public OffsetDateTime requestedTime;
    public HomeRegionControl withRequestedTime(OffsetDateTime requestedTime) {
        this.requestedTime = requestedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Target")
    public Target target;
    public HomeRegionControl withTarget(Target target) {
        this.target = target;
        return this;
    }
}