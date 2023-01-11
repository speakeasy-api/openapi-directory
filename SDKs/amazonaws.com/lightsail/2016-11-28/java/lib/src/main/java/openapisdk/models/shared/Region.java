package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Region
 * Describes the AWS Region.
**/
public class Region {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("availabilityZones")
    public AvailabilityZone[] availabilityZones;
    public Region withAvailabilityZones(AvailabilityZone[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("continentCode")
    public String continentCode;
    public Region withContinentCode(String continentCode) {
        this.continentCode = continentCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Region withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("displayName")
    public String displayName;
    public Region withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public RegionNameEnum name;
    public Region withName(RegionNameEnum name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("relationalDatabaseAvailabilityZones")
    public AvailabilityZone[] relationalDatabaseAvailabilityZones;
    public Region withRelationalDatabaseAvailabilityZones(AvailabilityZone[] relationalDatabaseAvailabilityZones) {
        this.relationalDatabaseAvailabilityZones = relationalDatabaseAvailabilityZones;
        return this;
    }
}