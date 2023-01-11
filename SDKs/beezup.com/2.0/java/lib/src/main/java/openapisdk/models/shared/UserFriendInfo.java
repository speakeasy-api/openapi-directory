package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UserFriendInfo {
    @JsonProperty("company")
    public String company;
    public UserFriendInfo withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonProperty("countryIsoCodeAlpha3")
    public String countryIsoCodeAlpha3;
    public UserFriendInfo withCountryIsoCodeAlpha3(String countryIsoCodeAlpha3) {
        this.countryIsoCodeAlpha3 = countryIsoCodeAlpha3;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public UserFriendInfo withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("firstName")
    public String firstName;
    public UserFriendInfo withFirstName(String firstName) {
        this.firstName = firstName;
        return this;
    }
    @JsonProperty("lastName")
    public String lastName;
    public UserFriendInfo withLastName(String lastName) {
        this.lastName = lastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("profilePictureUrl")
    public String profilePictureUrl;
    public UserFriendInfo withProfilePictureUrl(String profilePictureUrl) {
        this.profilePictureUrl = profilePictureUrl;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public UserFriendInfo withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("whatIDo")
    public String whatIDo;
    public UserFriendInfo withWhatIDo(String whatIDo) {
        this.whatIDo = whatIDo;
        return this;
    }
}