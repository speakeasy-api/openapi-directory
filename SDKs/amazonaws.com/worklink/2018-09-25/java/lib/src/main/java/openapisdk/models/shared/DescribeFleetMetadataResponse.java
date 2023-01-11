package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class DescribeFleetMetadataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CompanyCode")
    public String companyCode;
    public DescribeFleetMetadataResponse withCompanyCode(String companyCode) {
        this.companyCode = companyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTime")
    public OffsetDateTime createdTime;
    public DescribeFleetMetadataResponse withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public DescribeFleetMetadataResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetName")
    public String fleetName;
    public DescribeFleetMetadataResponse withFleetName(String fleetName) {
        this.fleetName = fleetName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetStatus")
    public FleetStatusEnum fleetStatus;
    public DescribeFleetMetadataResponse withFleetStatus(FleetStatusEnum fleetStatus) {
        this.fleetStatus = fleetStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTime")
    public OffsetDateTime lastUpdatedTime;
    public DescribeFleetMetadataResponse withLastUpdatedTime(OffsetDateTime lastUpdatedTime) {
        this.lastUpdatedTime = lastUpdatedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OptimizeForEndUserLocation")
    public Boolean optimizeForEndUserLocation;
    public DescribeFleetMetadataResponse withOptimizeForEndUserLocation(Boolean optimizeForEndUserLocation) {
        this.optimizeForEndUserLocation = optimizeForEndUserLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public DescribeFleetMetadataResponse withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}