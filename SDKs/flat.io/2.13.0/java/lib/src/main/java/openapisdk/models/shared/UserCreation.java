package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserCreation
 * User creation
**/
public class UserCreation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public UserCreation withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("firstname")
    public String firstname;
    public UserCreation withFirstname(String firstname) {
        this.firstname = firstname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lastname")
    public String lastname;
    public UserCreation withLastname(String lastname) {
        this.lastname = lastname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("locale")
    public FlatLocalesEnum locale;
    public UserCreation withLocale(FlatLocalesEnum locale) {
        this.locale = locale;
        return this;
    }
    @JsonProperty("password")
    public String password;
    public UserCreation withPassword(String password) {
        this.password = password;
        return this;
    }
    @JsonProperty("username")
    public String username;
    public UserCreation withUsername(String username) {
        this.username = username;
        return this;
    }
}