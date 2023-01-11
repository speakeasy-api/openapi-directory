package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateStackRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccessEndpoints")
    public AccessEndpoint[] accessEndpoints;
    public UpdateStackRequest withAccessEndpoints(AccessEndpoint[] accessEndpoints) {
        this.accessEndpoints = accessEndpoints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationSettings")
    public ApplicationSettings applicationSettings;
    public UpdateStackRequest withApplicationSettings(ApplicationSettings applicationSettings) {
        this.applicationSettings = applicationSettings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToDelete")
    public StackAttributeEnum[] attributesToDelete;
    public UpdateStackRequest withAttributesToDelete(StackAttributeEnum[] attributesToDelete) {
        this.attributesToDelete = attributesToDelete;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteStorageConnectors")
    public java.util.Map<String, Object> deleteStorageConnectors;
    public UpdateStackRequest withDeleteStorageConnectors(java.util.Map<String, Object> deleteStorageConnectors) {
        this.deleteStorageConnectors = deleteStorageConnectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateStackRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisplayName")
    public String displayName;
    public UpdateStackRequest withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EmbedHostDomains")
    public String[] embedHostDomains;
    public UpdateStackRequest withEmbedHostDomains(String[] embedHostDomains) {
        this.embedHostDomains = embedHostDomains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeedbackURL")
    public String feedbackURL;
    public UpdateStackRequest withFeedbackUrl(String feedbackURL) {
        this.feedbackURL = feedbackURL;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateStackRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RedirectURL")
    public String redirectURL;
    public UpdateStackRequest withRedirectUrl(String redirectURL) {
        this.redirectURL = redirectURL;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageConnectors")
    public StorageConnector[] storageConnectors;
    public UpdateStackRequest withStorageConnectors(StorageConnector[] storageConnectors) {
        this.storageConnectors = storageConnectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserSettings")
    public UserSetting[] userSettings;
    public UpdateStackRequest withUserSettings(UserSetting[] userSettings) {
        this.userSettings = userSettings;
        return this;
    }
}