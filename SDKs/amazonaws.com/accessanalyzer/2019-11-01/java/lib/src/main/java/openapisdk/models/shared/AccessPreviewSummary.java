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
 * AccessPreviewSummary
 * Contains a summary of information about an access preview.
**/
public class AccessPreviewSummary {
    @JsonProperty("analyzerArn")
    public String analyzerArn;
    public AccessPreviewSummary withAnalyzerArn(String analyzerArn) {
        this.analyzerArn = analyzerArn;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public AccessPreviewSummary withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public AccessPreviewSummary withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("status")
    public AccessPreviewStatusEnum status;
    public AccessPreviewSummary withStatus(AccessPreviewStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statusReason")
    public AccessPreviewStatusReason statusReason;
    public AccessPreviewSummary withStatusReason(AccessPreviewStatusReason statusReason) {
        this.statusReason = statusReason;
        return this;
    }
}