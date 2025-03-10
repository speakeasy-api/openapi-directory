/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.operations;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TeamsAddApp201ApplicationJSON - Success
 */
public class TeamsAddApp201ApplicationJSON {
    /**
     * A unique and secret key used to identify the app in communication with the ingestion endpoint for crash reporting and analytics
     */
    @JsonProperty("app_secret")
    public String appSecret;

    public TeamsAddApp201ApplicationJSON withAppSecret(String appSecret) {
        this.appSecret = appSecret;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("azure_subscription")
    public TeamsAddApp201ApplicationJSONAzureSubscription azureSubscription;

    public TeamsAddApp201ApplicationJSON withAzureSubscription(TeamsAddApp201ApplicationJSONAzureSubscription azureSubscription) {
        this.azureSubscription = azureSubscription;
        return this;
    }
    
    /**
     * The created date of this app
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public String createdAt;

    public TeamsAddApp201ApplicationJSON withCreatedAt(String createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The description of the app
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;

    public TeamsAddApp201ApplicationJSON withDescription(String description) {
        this.description = description;
        return this;
    }
    
    /**
     * The display name of the app
     */
    @JsonProperty("display_name")
    public String displayName;

    public TeamsAddApp201ApplicationJSON withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    
    /**
     * The string representation of the source of the app's icon
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon_source")
    public String iconSource;

    public TeamsAddApp201ApplicationJSON withIconSource(String iconSource) {
        this.iconSource = iconSource;
        return this;
    }
    
    /**
     * The string representation of the URL pointing to the app's icon
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon_url")
    public String iconUrl;

    public TeamsAddApp201ApplicationJSON withIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
        return this;
    }
    
    /**
     * The unique ID (UUID) of the app
     */
    @JsonProperty("id")
    public String id;

    public TeamsAddApp201ApplicationJSON withId(String id) {
        this.id = id;
        return this;
    }
    
    /**
     * The permissions of the calling user
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("member_permissions")
    public TeamsAddApp201ApplicationJSONMemberPermissionsEnum[] memberPermissions;

    public TeamsAddApp201ApplicationJSON withMemberPermissions(TeamsAddApp201ApplicationJSONMemberPermissionsEnum[] memberPermissions) {
        this.memberPermissions = memberPermissions;
        return this;
    }
    
    /**
     * The name of the app used in URLs
     */
    @JsonProperty("name")
    public String name;

    public TeamsAddApp201ApplicationJSON withName(String name) {
        this.name = name;
        return this;
    }
    
    /**
     * The creation origin of this app
     */
    @JsonProperty("origin")
    public TeamsAddApp201ApplicationJSONOriginEnum origin;

    public TeamsAddApp201ApplicationJSON withOrigin(TeamsAddApp201ApplicationJSONOriginEnum origin) {
        this.origin = origin;
        return this;
    }
    
    /**
     * The OS the app will be running on
     */
    @JsonProperty("os")
    public TeamsAddApp201ApplicationJSONOsEnum os;

    public TeamsAddApp201ApplicationJSON withOs(TeamsAddApp201ApplicationJSONOsEnum os) {
        this.os = os;
        return this;
    }
    
    /**
     * The information about the app's owner
     */
    @JsonProperty("owner")
    public TeamsAddApp201ApplicationJSONOwner owner;

    public TeamsAddApp201ApplicationJSON withOwner(TeamsAddApp201ApplicationJSONOwner owner) {
        this.owner = owner;
        return this;
    }
    
    /**
     * The platform of the app
     */
    @JsonProperty("platform")
    public TeamsAddApp201ApplicationJSONPlatformEnum platform;

    public TeamsAddApp201ApplicationJSON withPlatform(TeamsAddApp201ApplicationJSONPlatformEnum platform) {
        this.platform = platform;
        return this;
    }
    
    /**
     * A one-word descriptive release-type value that starts with a capital letter but is otherwise lowercase
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("release_type")
    public String releaseType;

    public TeamsAddApp201ApplicationJSON withReleaseType(String releaseType) {
        this.releaseType = releaseType;
        return this;
    }
    
    /**
     * The permissions the team has for the app
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("team_permissions")
    public TeamsAddApp201ApplicationJSONTeamPermissionsEnum[] teamPermissions;

    public TeamsAddApp201ApplicationJSON withTeamPermissions(TeamsAddApp201ApplicationJSONTeamPermissionsEnum[] teamPermissions) {
        this.teamPermissions = teamPermissions;
        return this;
    }
    
    /**
     * The last updated date of this app
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public String updatedAt;

    public TeamsAddApp201ApplicationJSON withUpdatedAt(String updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    public TeamsAddApp201ApplicationJSON(@JsonProperty("app_secret") String appSecret, @JsonProperty("display_name") String displayName, @JsonProperty("id") String id, @JsonProperty("name") String name, @JsonProperty("origin") TeamsAddApp201ApplicationJSONOriginEnum origin, @JsonProperty("os") TeamsAddApp201ApplicationJSONOsEnum os, @JsonProperty("owner") TeamsAddApp201ApplicationJSONOwner owner, @JsonProperty("platform") TeamsAddApp201ApplicationJSONPlatformEnum platform) {
        this.appSecret = appSecret;
        this.displayName = displayName;
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.os = os;
        this.owner = owner;
        this.platform = platform;
  }
}
