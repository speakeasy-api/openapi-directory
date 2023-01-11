package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Organization
 * An organization connected to data hub
**/
public class Organization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countyName")
    public String countyName;
    public Organization withCountyName(String countyName) {
        this.countyName = countyName;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Organization withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("jurisdiction")
    public OrganizationJurisdictionEnum jurisdiction;
    public Organization withJurisdiction(OrganizationJurisdictionEnum jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("meta")
    public SettingMetadata meta;
    public Organization withMeta(SettingMetadata meta) {
        this.meta = meta;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Organization withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateCode")
    public String stateCode;
    public Organization withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
}