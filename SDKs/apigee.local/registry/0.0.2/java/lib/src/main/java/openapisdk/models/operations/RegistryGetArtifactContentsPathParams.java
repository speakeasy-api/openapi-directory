package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegistryGetArtifactContentsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifact")
    public String artifact;
    public RegistryGetArtifactContentsPathParams withArtifact(String artifact) {
        this.artifact = artifact;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=project")
    public String project;
    public RegistryGetArtifactContentsPathParams withProject(String project) {
        this.project = project;
        return this;
    }
}