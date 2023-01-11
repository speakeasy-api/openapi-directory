package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPublicSummary
 * Public User details summary
**/
public class UserPublicSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classRole")
    public ClassRolesEnum classRole;
    public UserPublicSummary withClassRole(ClassRolesEnum classRole) {
        this.classRole = classRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public UserPublicSummary withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlUrl")
    public String htmlUrl;
    public UserPublicSummary withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserPublicSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFlatTeam")
    public Boolean isFlatTeam;
    public UserPublicSummary withIsFlatTeam(Boolean isFlatTeam) {
        this.isFlatTeam = isFlatTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPowerUser")
    public Boolean isPowerUser;
    public UserPublicSummary withIsPowerUser(Boolean isPowerUser) {
        this.isPowerUser = isPowerUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public UserPublicSummary withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserPublicSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public UserPublicSummary withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationRole")
    public OrganizationRolesEnum organizationRole;
    public UserPublicSummary withOrganizationRole(OrganizationRolesEnum organizationRole) {
        this.organizationRole = organizationRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picture")
    public String picture;
    public UserPublicSummary withPicture(String picture) {
        this.picture = picture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printableName")
    public String printableName;
    public UserPublicSummary withPrintableName(String printableName) {
        this.printableName = printableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserPublicSummaryTypeEnum type;
    public UserPublicSummary withType(UserPublicSummaryTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserPublicSummary withUsername(String username) {
        this.username = username;
        return this;
    }
}