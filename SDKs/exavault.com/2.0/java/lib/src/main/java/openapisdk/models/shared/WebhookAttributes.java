package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class WebhookAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public WebhookAttributes withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("endpointUrl")
    public String endpointUrl;
    public WebhookAttributes withEndpointUrl(String endpointUrl) {
        this.endpointUrl = endpointUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Boolean failed;
    public WebhookAttributes withFailed(Boolean failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public WebhookAttributes withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("responseVersion")
    public WebhookAttributesResponseVersionEnum responseVersion;
    public WebhookAttributes withResponseVersion(WebhookAttributesResponseVersionEnum responseVersion) {
        this.responseVersion = responseVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("triggers")
    public WebhookTriggers triggers;
    public WebhookAttributes withTriggers(WebhookTriggers triggers) {
        this.triggers = triggers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("verificationToken")
    public String verificationToken;
    public WebhookAttributes withVerificationToken(String verificationToken) {
        this.verificationToken = verificationToken;
        return this;
    }
}