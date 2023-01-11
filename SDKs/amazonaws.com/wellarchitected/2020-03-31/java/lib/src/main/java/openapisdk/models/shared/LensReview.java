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
 * LensReview
 * A lens review of a question.
**/
public class LensReview {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensAlias")
    public String lensAlias;
    public LensReview withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensName")
    public String lensName;
    public LensReview withLensName(String lensName) {
        this.lensName = lensName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensStatus")
    public LensStatusEnum lensStatus;
    public LensReview withLensStatus(LensStatusEnum lensStatus) {
        this.lensStatus = lensStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LensVersion")
    public String lensVersion;
    public LensReview withLensVersion(String lensVersion) {
        this.lensVersion = lensVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public LensReview withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Notes")
    public String notes;
    public LensReview withNotes(String notes) {
        this.notes = notes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PillarReviewSummaries")
    public PillarReviewSummary[] pillarReviewSummaries;
    public LensReview withPillarReviewSummaries(PillarReviewSummary[] pillarReviewSummaries) {
        this.pillarReviewSummaries = pillarReviewSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RiskCounts")
    public java.util.Map<String, Long> riskCounts;
    public LensReview withRiskCounts(java.util.Map<String, Long> riskCounts) {
        this.riskCounts = riskCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("UpdatedAt")
    public OffsetDateTime updatedAt;
    public LensReview withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}