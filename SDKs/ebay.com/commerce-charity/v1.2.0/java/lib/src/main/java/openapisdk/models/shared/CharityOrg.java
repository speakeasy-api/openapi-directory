package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CharityOrg
 * The full location, ID, logo and other details of the charity organization.
**/
public class CharityOrg {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("charityOrgId")
    public String charityOrgId;
    public CharityOrg withCharityOrgId(String charityOrgId) {
        this.charityOrgId = charityOrgId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CharityOrg withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public Location location;
    public CharityOrg withLocation(Location location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logoImage")
    public Image logoImage;
    public CharityOrg withLogoImage(Image logoImage) {
        this.logoImage = logoImage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("missionStatement")
    public String missionStatement;
    public CharityOrg withMissionStatement(String missionStatement) {
        this.missionStatement = missionStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CharityOrg withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("registrationId")
    public String registrationId;
    public CharityOrg withRegistrationId(String registrationId) {
        this.registrationId = registrationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public CharityOrg withWebsite(String website) {
        this.website = website;
        return this;
    }
}