package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ActionsListWorkflowRunArtifacts200ApplicationJson {
    @JsonProperty("artifacts")
    public openapisdk.models.shared.Artifact[] artifacts;
    public ActionsListWorkflowRunArtifacts200ApplicationJson withArtifacts(openapisdk.models.shared.Artifact[] artifacts) {
        this.artifacts = artifacts;
        return this;
    }
    @JsonProperty("total_count")
    public Long totalCount;
    public ActionsListWorkflowRunArtifacts200ApplicationJson withTotalCount(Long totalCount) {
        this.totalCount = totalCount;
        return this;
    }
}