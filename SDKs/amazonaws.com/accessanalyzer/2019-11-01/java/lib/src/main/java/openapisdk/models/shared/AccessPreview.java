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
 * AccessPreview
 * Contains information about an access preview.
**/
public class AccessPreview {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public AccessPreview withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonProperty("configurations")
    public java.util.Map<String, Configuration> configurations;
    public AccessPreview withConfigurations(java.util.Map<String, Configuration> configurations) {
        this.configurations = configurations;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AccessPreview withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AccessPreview withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public AccessPreviewStatusEnum status;
    public AccessPreview withStatus(AccessPreviewStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public AccessPreviewStatusReason statusReason;
    public AccessPreview withStatusReason(AccessPreviewStatusReason statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}