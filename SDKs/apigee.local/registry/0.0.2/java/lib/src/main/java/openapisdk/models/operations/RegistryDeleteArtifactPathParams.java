package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryDeleteArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifact")
    public String artifact;
    public RegistryDeleteArtifactPathParams withArtifact(String artifact) {
        this.artifact = artifact;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryDeleteArtifactPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}