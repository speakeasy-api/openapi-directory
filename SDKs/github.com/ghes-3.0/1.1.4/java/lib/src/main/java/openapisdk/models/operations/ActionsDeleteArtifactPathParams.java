package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ActionsDeleteArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifact_id")
    public Long artifactId;
    public ActionsDeleteArtifactPathParams withArtifactId(Long artifactId) {
        this.artifactId = artifactId;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=owner")
    public String owner;
    public ActionsDeleteArtifactPathParams withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=repo")
    public String repo;
    public ActionsDeleteArtifactPathParams withRepo(String repo) {
        this.repo = repo;
        return this;
    }
}