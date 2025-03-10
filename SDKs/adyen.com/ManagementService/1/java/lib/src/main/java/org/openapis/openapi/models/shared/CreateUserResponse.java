/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CreateUserResponse - OK - the request has succeeded.
 */
public class CreateUserResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("_links")
    public Links links;

    public CreateUserResponse withLinks(Links links) {
        this.links = links;
        return this;
    }
    
    /**
     * The list of [account groups](https://docs.adyen.com/account/account-structure#account-groups) associated with this user.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountGroups")
    public String[] accountGroups;

    public CreateUserResponse withAccountGroups(String[] accountGroups) {
        this.accountGroups = accountGroups;
        return this;
    }
    
    /**
     * Indicates whether this user is active.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;

    public CreateUserResponse withActive(Boolean active) {
        this.active = active;
        return this;
    }
    
    /**
     * Set of authn apps available to this user
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authnApps")
    public String[] authnApps;

    public CreateUserResponse withAuthnApps(String[] authnApps) {
        this.authnApps = authnApps;
        return this;
    }
    
    /**
     * The email address of the user.
     */
    @JsonProperty("email")
    public String email;

    public CreateUserResponse withEmail(String email) {
        this.email = email;
        return this;
    }
    
    /**
     * The unique identifier of the user.
     */
    @JsonProperty("id")
    public String id;

    public CreateUserResponse withId(String id) {
        this.id = id;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public Name name;

    public CreateUserResponse withName(Name name) {
        this.name = name;
        return this;
    }
    
    /**
     * The list of [roles](https://docs.adyen.com/account/user-roles) for this user.
     */
    @JsonProperty("roles")
    public String[] roles;

    public CreateUserResponse withRoles(String[] roles) {
        this.roles = roles;
        return this;
    }
    
    /**
     * The [tz database name](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) of the time zone of the user. For example, **Europe/Amsterdam**.
     */
    @JsonProperty("timeZoneCode")
    public String timeZoneCode;

    public CreateUserResponse withTimeZoneCode(String timeZoneCode) {
        this.timeZoneCode = timeZoneCode;
        return this;
    }
    
    /**
     * The username for this user.
     */
    @JsonProperty("username")
    public String username;

    public CreateUserResponse withUsername(String username) {
        this.username = username;
        return this;
    }
    
    public CreateUserResponse(@JsonProperty("email") String email, @JsonProperty("id") String id, @JsonProperty("roles") String[] roles, @JsonProperty("timeZoneCode") String timeZoneCode, @JsonProperty("username") String username) {
        this.email = email;
        this.id = id;
        this.roles = roles;
        this.timeZoneCode = timeZoneCode;
        this.username = username;
  }
}
