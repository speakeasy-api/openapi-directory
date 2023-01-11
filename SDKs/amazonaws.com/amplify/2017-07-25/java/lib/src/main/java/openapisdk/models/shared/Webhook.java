package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Webhook
 *  Describes a webhook that connects repository events to an Amplify app. 
**/
public class Webhook {
    @JsonProperty("branchName")
    public String branchName;
    public Webhook withBranchName(String branchName) {
        this.branchName = branchName;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createTime")
    public OffsetDateTime createTime;
    public Webhook withCreateTime(OffsetDateTime createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public Webhook withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updateTime")
    public OffsetDateTime updateTime;
    public Webhook withUpdateTime(OffsetDateTime updateTime) {
        this.updateTime = updateTime;
        return this;
    }
    @JsonProperty("webhookArn")
    public String webhookArn;
    public Webhook withWebhookArn(String webhookArn) {
        this.webhookArn = webhookArn;
        return this;
    }
    @JsonProperty("webhookId")
    public String webhookId;
    public Webhook withWebhookId(String webhookId) {
        this.webhookId = webhookId;
        return this;
    }
    @JsonProperty("webhookUrl")
    public String webhookUrl;
    public Webhook withWebhookUrl(String webhookUrl) {
        this.webhookUrl = webhookUrl;
        return this;
    }
}