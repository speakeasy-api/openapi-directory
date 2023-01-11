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
 * UserDetailsAdmin
 * Public User details summary
**/
public class UserDetailsAdmin {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classRole")
    public ClassRolesEnum classRole;
    public UserDetailsAdmin withClassRole(ClassRolesEnum classRole) {
        this.classRole = classRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserDetailsAdmin withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public UserDetailsAdmin withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlUrl")
    public String htmlUrl;
    public UserDetailsAdmin withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserDetailsAdmin withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFlatTeam")
    public Boolean isFlatTeam;
    public UserDetailsAdmin withIsFlatTeam(Boolean isFlatTeam) {
        this.isFlatTeam = isFlatTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPowerUser")
    public Boolean isPowerUser;
    public UserDetailsAdmin withIsPowerUser(Boolean isPowerUser) {
        this.isPowerUser = isPowerUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastActivityDate")
    public OffsetDateTime lastActivityDate;
    public UserDetailsAdmin withLastActivityDate(OffsetDateTime lastActivityDate) {
        this.lastActivityDate = lastActivityDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public UserDetailsAdmin withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("license")
    public UserDetailsAdminLicense license;
    public UserDetailsAdmin withLicense(UserDetailsAdminLicense license) {
        this.license = license;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserDetailsAdmin withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public UserDetailsAdmin withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationRole")
    public OrganizationRolesEnum organizationRole;
    public UserDetailsAdmin withOrganizationRole(OrganizationRolesEnum organizationRole) {
        this.organizationRole = organizationRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picture")
    public String picture;
    public UserDetailsAdmin withPicture(String picture) {
        this.picture = picture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printableName")
    public String printableName;
    public UserDetailsAdmin withPrintableName(String printableName) {
        this.printableName = printableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserDetailsAdminTypeEnum type;
    public UserDetailsAdmin withType(UserDetailsAdminTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserDetailsAdmin withUsername(String username) {
        this.username = username;
        return this;
    }
}