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
 * LensReviewSummary
 * A lens review summary of a workload.
**/
public class LensReviewSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public LensReviewSummary withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensName")
    public String lensName;
    public LensReviewSummary withLensName(String lensName) {
        this.lensName = lensName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensStatus")
    public LensStatusEnum lensStatus;
    public LensReviewSummary withLensStatus(LensStatusEnum lensStatus) {
        this.lensStatus = lensStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensVersion")
    public String lensVersion;
    public LensReviewSummary withLensVersion(String lensVersion) {
        this.lensVersion = lensVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskCounts")
    public java.util.Map<String, Long> riskCounts;
    public LensReviewSummary withRiskCounts(java.util.Map<String, Long> riskCounts) {
        this.riskCounts = riskCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public LensReviewSummary withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}