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
 * Webhook
 * Information about a webhook that connects repository events to a build project in CodeBuild.
**/
public class Webhook {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchFilter")
    public String branchFilter;
    public Webhook withBranchFilter(String branchFilter) {
        this.branchFilter = branchFilter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildType")
    public WebhookBuildTypeEnum buildType;
    public Webhook withBuildType(WebhookBuildTypeEnum buildType) {
        this.buildType = buildType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filterGroups")
    public WebhookFilter[][] filterGroups;
    public Webhook withFilterGroups(WebhookFilter[][] filterGroups) {
        this.filterGroups = filterGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedSecret")
    public OffsetDateTime lastModifiedSecret;
    public Webhook withLastModifiedSecret(OffsetDateTime lastModifiedSecret) {
        this.lastModifiedSecret = lastModifiedSecret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadUrl")
    public String payloadUrl;
    public Webhook withPayloadUrl(String payloadUrl) {
        this.payloadUrl = payloadUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secret")
    public String secret;
    public Webhook withSecret(String secret) {
        this.secret = secret;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public Webhook withUrl(String url) {
        this.url = url;
        return this;
    }
}