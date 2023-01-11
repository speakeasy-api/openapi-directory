package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Connection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auth_type")
    public AuthTypeEnum authType;
    public Connection withAuthType(AuthTypeEnum authType) {
        this.authType = authType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorize_url")
    public String authorizeUrl;
    public Connection withAuthorizeUrl(String authorizeUrl) {
        this.authorizeUrl = authorizeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurable_resources")
    public String[] configurableResources;
    public Connection withConfigurableResources(String[] configurableResources) {
        this.configurableResources = configurableResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configuration")
    public ConnectionConfiguration[] configuration;
    public Connection withConfiguration(ConnectionConfiguration[] configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_at")
    public Double createdAt;
    public Connection withCreatedAt(Double createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enabled")
    public Boolean enabled;
    public Connection withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_fields")
    public FormField[] formFields;
    public Connection withFormFields(FormField[] formFields) {
        this.formFields = formFields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("has_guide")
    public Boolean hasGuide;
    public Connection withHasGuide(Boolean hasGuide) {
        this.hasGuide = hasGuide;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("icon")
    public String icon;
    public Connection withIcon(String icon) {
        this.icon = icon;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Connection withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logo")
    public String logo;
    public Connection withLogo(String logo) {
        this.logo = logo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;
    public Connection withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Connection withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("oauth_grant_type")
    public OAuthGrantTypeEnum oauthGrantType;
    public Connection withOauthGrantType(OAuthGrantTypeEnum oauthGrantType) {
        this.oauthGrantType = oauthGrantType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_schema_support")
    public String[] resourceSchemaSupport;
    public Connection withResourceSchemaSupport(String[] resourceSchemaSupport) {
        this.resourceSchemaSupport = resourceSchemaSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_settings_support")
    public String[] resourceSettingsSupport;
    public Connection withResourceSettingsSupport(String[] resourceSettingsSupport) {
        this.resourceSettingsSupport = resourceSettingsSupport;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revoke_url")
    public String revokeUrl;
    public Connection withRevokeUrl(String revokeUrl) {
        this.revokeUrl = revokeUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_id")
    public String serviceId;
    public Connection withServiceId(String serviceId) {
        this.serviceId = serviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings")
    public java.util.Map<String, Object> settings;
    public Connection withSettings(java.util.Map<String, Object> settings) {
        this.settings = settings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("settings_required_for_authorization")
    public String[] settingsRequiredForAuthorization;
    public Connection withSettingsRequiredForAuthorization(String[] settingsRequiredForAuthorization) {
        this.settingsRequiredForAuthorization = settingsRequiredForAuthorization;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public ConnectionStateEnum state;
    public Connection withState(ConnectionStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ConnectionStatusEnum status;
    public Connection withStatus(ConnectionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("subscriptions")
    public WebhookSubscription[] subscriptions;
    public Connection withSubscriptions(WebhookSubscription[] subscriptions) {
        this.subscriptions = subscriptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tag_line")
    public String tagLine;
    public Connection withTagLine(String tagLine) {
        this.tagLine = tagLine;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unified_api")
    public String unifiedApi;
    public Connection withUnifiedApi(String unifiedApi) {
        this.unifiedApi = unifiedApi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_at")
    public Double updatedAt;
    public Connection withUpdatedAt(Double updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("website")
    public String website;
    public Connection withWebsite(String website) {
        this.website = website;
        return this;
    }
}