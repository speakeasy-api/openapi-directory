package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Organization1
 * An organization connected to data hub
**/
public class Organization1 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("countyName")
    public String countyName;
    public Organization1 withCountyName(String countyName) {
        this.countyName = countyName;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Organization1 withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("jurisdiction")
    public OrganizationJurisdictionEnum jurisdiction;
    public Organization1 withJurisdiction(OrganizationJurisdictionEnum jurisdiction) {
        this.jurisdiction = jurisdiction;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Organization1 withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stateCode")
    public String stateCode;
    public Organization1 withStateCode(String stateCode) {
        this.stateCode = stateCode;
        return this;
    }
}