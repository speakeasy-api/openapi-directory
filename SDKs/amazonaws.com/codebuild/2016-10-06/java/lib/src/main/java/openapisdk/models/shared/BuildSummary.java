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
 * BuildSummary
 * Contains summary information about a batch build group.
**/
public class BuildSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("arn")
    public String arn;
    public BuildSummary withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("buildStatus")
    public StatusTypeEnum buildStatus;
    public BuildSummary withBuildStatus(StatusTypeEnum buildStatus) {
        this.buildStatus = buildStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primaryArtifact")
    public ResolvedArtifact primaryArtifact;
    public BuildSummary withPrimaryArtifact(ResolvedArtifact primaryArtifact) {
        this.primaryArtifact = primaryArtifact;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("requestedOn")
    public OffsetDateTime requestedOn;
    public BuildSummary withRequestedOn(OffsetDateTime requestedOn) {
        this.requestedOn = requestedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("secondaryArtifacts")
    public ResolvedArtifact[] secondaryArtifacts;
    public BuildSummary withSecondaryArtifacts(ResolvedArtifact[] secondaryArtifacts) {
        this.secondaryArtifacts = secondaryArtifacts;
        return this;
    }
}