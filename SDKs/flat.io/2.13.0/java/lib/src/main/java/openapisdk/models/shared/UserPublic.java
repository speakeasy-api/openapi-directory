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
 * UserPublic
 * Public User details summary
**/
public class UserPublic {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public UserPublic withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classRole")
    public ClassRolesEnum classRole;
    public UserPublic withClassRole(ClassRolesEnum classRole) {
        this.classRole = classRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPicture")
    public String coverPicture;
    public UserPublic withCoverPicture(String coverPicture) {
        this.coverPicture = coverPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public UserPublic withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followersCount")
    public Long followersCount;
    public UserPublic withFollowersCount(Long followersCount) {
        this.followersCount = followersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followingCount")
    public Long followingCount;
    public UserPublic withFollowingCount(Long followingCount) {
        this.followingCount = followingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlUrl")
    public String htmlUrl;
    public UserPublic withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserPublic withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruments")
    public String[] instruments;
    public UserPublic withInstruments(String[] instruments) {
        this.instruments = instruments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFlatTeam")
    public Boolean isFlatTeam;
    public UserPublic withIsFlatTeam(Boolean isFlatTeam) {
        this.isFlatTeam = isFlatTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPowerUser")
    public Boolean isPowerUser;
    public UserPublic withIsPowerUser(Boolean isPowerUser) {
        this.isPowerUser = isPowerUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public UserPublic withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likedScoresCount")
    public Long likedScoresCount;
    public UserPublic withLikedScoresCount(Long likedScoresCount) {
        this.likedScoresCount = likedScoresCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserPublic withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public UserPublic withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationRole")
    public OrganizationRolesEnum organizationRole;
    public UserPublic withOrganizationRole(OrganizationRolesEnum organizationRole) {
        this.organizationRole = organizationRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedPublicScoresCount")
    public Long ownedPublicScoresCount;
    public UserPublic withOwnedPublicScoresCount(Long ownedPublicScoresCount) {
        this.ownedPublicScoresCount = ownedPublicScoresCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picture")
    public String picture;
    public UserPublic withPicture(String picture) {
        this.picture = picture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printableName")
    public String printableName;
    public UserPublic withPrintableName(String printableName) {
        this.printableName = printableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileTheme")
    public String profileTheme;
    public UserPublic withProfileTheme(String profileTheme) {
        this.profileTheme = profileTheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("registrationDate")
    public OffsetDateTime registrationDate;
    public UserPublic withRegistrationDate(OffsetDateTime registrationDate) {
        this.registrationDate = registrationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserPublicTypeEnum type;
    public UserPublic withType(UserPublicTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserPublic withUsername(String username) {
        this.username = username;
        return this;
    }
}