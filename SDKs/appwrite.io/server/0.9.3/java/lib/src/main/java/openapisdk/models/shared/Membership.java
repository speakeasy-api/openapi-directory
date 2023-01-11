package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Membership
 * Membership
**/
public class Membership {
    @JsonProperty("$id")
    public String dollarId;
    public Membership withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("confirm")
    public Boolean confirm;
    public Membership withConfirm(Boolean confirm) {
        this.confirm = confirm;
        return this;
    }
    @JsonProperty("email")
    public String email;
    public Membership withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonProperty("invited")
    public Integer invited;
    public Membership withInvited(Integer invited) {
        this.invited = invited;
        return this;
    }
    @JsonProperty("joined")
    public Integer joined;
    public Membership withJoined(Integer joined) {
        this.joined = joined;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Membership withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("roles")
    public String[] roles;
    public Membership withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    @JsonProperty("teamId")
    public String teamId;
    public Membership withTeamId(String teamId) {
        this.teamId = teamId;
        return this;
    }
    @JsonProperty("userId")
    public String userId;
    public Membership withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}