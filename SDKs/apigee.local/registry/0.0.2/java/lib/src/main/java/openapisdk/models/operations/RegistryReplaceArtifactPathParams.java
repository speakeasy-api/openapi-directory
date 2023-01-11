package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryReplaceArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifact")
    public String artifact;
    public RegistryReplaceArtifactPathParams withArtifact(String artifact) {
        this.artifact = artifact;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryReplaceArtifactPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}