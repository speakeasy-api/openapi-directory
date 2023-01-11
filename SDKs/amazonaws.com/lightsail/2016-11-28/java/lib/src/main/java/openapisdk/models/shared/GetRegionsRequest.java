package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRegionsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeAvailabilityZones")
    public Boolean includeAvailabilityZones;
    public GetRegionsRequest withIncludeAvailabilityZones(Boolean includeAvailabilityZones) {
        this.includeAvailabilityZones = includeAvailabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeRelationalDatabaseAvailabilityZones")
    public Boolean includeRelationalDatabaseAvailabilityZones;
    public GetRegionsRequest withIncludeRelationalDatabaseAvailabilityZones(Boolean includeRelationalDatabaseAvailabilityZones) {
        this.includeRelationalDatabaseAvailabilityZones = includeRelationalDatabaseAvailabilityZones;
        return this;
    }
}