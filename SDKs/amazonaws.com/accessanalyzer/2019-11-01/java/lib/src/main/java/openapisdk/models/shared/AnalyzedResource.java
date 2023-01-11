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
 * AnalyzedResource
 * Contains details about the analyzed resource.
**/
public class AnalyzedResource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public String[] actions;
    public AnalyzedResource withActions(String[] actions) {
        this.actions = actions;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("analyzedAt")
    public OffsetDateTime analyzedAt;
    public AnalyzedResource withAnalyzedAt(OffsetDateTime analyzedAt) {
        this.analyzedAt = analyzedAt;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AnalyzedResource withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public AnalyzedResource withError(String error) {
        this.error = error;
        return this;
    }
    @JsonProperty("isPublic")
    public Boolean isPublic;
    public AnalyzedResource withIsPublic(Boolean isPublic) {
        this.isPublic = isPublic;
        return this;
    }
    @JsonProperty("resourceArn")
    public String resourceArn;
    public AnalyzedResource withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("resourceOwnerAccount")
    public String resourceOwnerAccount;
    public AnalyzedResource withResourceOwnerAccount(String resourceOwnerAccount) {
        this.resourceOwnerAccount = resourceOwnerAccount;
        return this;
    }
    @JsonProperty("resourceType")
    public ResourceTypeEnum resourceType;
    public AnalyzedResource withResourceType(ResourceTypeEnum resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sharedVia")
    public String[] sharedVia;
    public AnalyzedResource withSharedVia(String[] sharedVia) {
        this.sharedVia = sharedVia;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FindingStatusEnum status;
    public AnalyzedResource withStatus(FindingStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public AnalyzedResource withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}