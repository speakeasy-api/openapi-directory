package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * User
 * User
**/
public class User {
    @JsonProperty("$id")
    public String dollarId;
    public User withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public User withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("emailVerification")
    public Boolean emailVerification;
    public User withEmailVerification(Boolean emailVerification) {
        this.emailVerification = emailVerification;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public User withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("passwordUpdate")
    public Integer passwordUpdate;
    public User withPasswordUpdate(Integer passwordUpdate) {
        this.passwordUpdate = passwordUpdate;
        return this;
    }
    @JsonProperty("prefs")
    public java.util.Map<String, Object> prefs;
    public User withPrefs(java.util.Map<String, Object> prefs) {
        this.prefs = prefs;
        return this;
    }
    @JsonProperty("registration")
    public Integer registration;
    public User withRegistration(Integer registration) {
        this.registration = registration;
        return this;
    }
    @JsonProperty("status")
    public Integer status;
    public User withStatus(Integer status) {
        this.status = status;
        return this;
    }
}