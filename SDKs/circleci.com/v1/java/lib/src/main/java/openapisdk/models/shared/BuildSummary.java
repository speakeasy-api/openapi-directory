package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class BuildSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("added_at")
    public OffsetDateTime addedAt;
    public BuildSummary withAddedAt(OffsetDateTime addedAt) {
        this.addedAt = addedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("build_num")
    public Long buildNum;
    public BuildSummary withBuildNum(Long buildNum) {
        this.buildNum = buildNum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outcome")
    public OutcomeEnum outcome;
    public BuildSummary withOutcome(OutcomeEnum outcome) {
        this.outcome = outcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("pushed_at")
    public OffsetDateTime pushedAt;
    public BuildSummary withPushedAt(OffsetDateTime pushedAt) {
        this.pushedAt = pushedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public StatusEnum status;
    public BuildSummary withStatus(StatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("vcs_revision")
    public String vcsRevision;
    public BuildSummary withVcsRevision(String vcsRevision) {
        this.vcsRevision = vcsRevision;
        return this;
    }
}