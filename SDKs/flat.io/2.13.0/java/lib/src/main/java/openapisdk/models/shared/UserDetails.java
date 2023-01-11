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
 * UserDetails
 * Public User details summary
**/
public class UserDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bio")
    public String bio;
    public UserDetails withBio(String bio) {
        this.bio = bio;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classRole")
    public ClassRolesEnum classRole;
    public UserDetails withClassRole(ClassRolesEnum classRole) {
        this.classRole = classRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPicture")
    public String coverPicture;
    public UserDetails withCoverPicture(String coverPicture) {
        this.coverPicture = coverPicture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverPictureFile")
    public String coverPictureFile;
    public UserDetails withCoverPictureFile(String coverPictureFile) {
        this.coverPictureFile = coverPictureFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public UserDetails withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followersCount")
    public Long followersCount;
    public UserDetails withFollowersCount(Long followersCount) {
        this.followersCount = followersCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("followingCount")
    public Long followingCount;
    public UserDetails withFollowingCount(Long followingCount) {
        this.followingCount = followingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("htmlUrl")
    public String htmlUrl;
    public UserDetails withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UserDetails withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instruments")
    public String[] instruments;
    public UserDetails withInstruments(String[] instruments) {
        this.instruments = instruments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isFlatTeam")
    public Boolean isFlatTeam;
    public UserDetails withIsFlatTeam(Boolean isFlatTeam) {
        this.isFlatTeam = isFlatTeam;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPowerUser")
    public Boolean isPowerUser;
    public UserDetails withIsPowerUser(Boolean isPowerUser) {
        this.isPowerUser = isPowerUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public UserDetails withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("likedScoresCount")
    public Long likedScoresCount;
    public UserDetails withLikedScoresCount(Long likedScoresCount) {
        this.likedScoresCount = likedScoresCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public FlatLocalesEnum locale;
    public UserDetails withLocale(FlatLocalesEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UserDetails withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organization")
    public String organization;
    public UserDetails withOrganization(String organization) {
        this.organization = organization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("organizationRole")
    public OrganizationRolesEnum organizationRole;
    public UserDetails withOrganizationRole(OrganizationRolesEnum organizationRole) {
        this.organizationRole = organizationRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ownedPublicScoresCount")
    public Long ownedPublicScoresCount;
    public UserDetails withOwnedPublicScoresCount(Long ownedPublicScoresCount) {
        this.ownedPublicScoresCount = ownedPublicScoresCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("picture")
    public String picture;
    public UserDetails withPicture(String picture) {
        this.picture = picture;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pictureFile")
    public String pictureFile;
    public UserDetails withPictureFile(String pictureFile) {
        this.pictureFile = pictureFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("printableName")
    public String printableName;
    public UserDetails withPrintableName(String printableName) {
        this.printableName = printableName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("privateProfile")
    public Boolean privateProfile;
    public UserDetails withPrivateProfile(Boolean privateProfile) {
        this.privateProfile = privateProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profileTheme")
    public String profileTheme;
    public UserDetails withProfileTheme(String profileTheme) {
        this.profileTheme = profileTheme;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("registrationDate")
    public OffsetDateTime registrationDate;
    public UserDetails withRegistrationDate(OffsetDateTime registrationDate) {
        this.registrationDate = registrationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public UserDetailsTypeEnum type;
    public UserDetails withType(UserDetailsTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("username")
    public String username;
    public UserDetails withUsername(String username) {
        this.username = username;
        return this;
    }
}