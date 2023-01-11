package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryGetArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifact")
    public String artifact;
    public RegistryGetArtifactPathParams withArtifact(String artifact) {
        this.artifact = artifact;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryGetArtifactPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}