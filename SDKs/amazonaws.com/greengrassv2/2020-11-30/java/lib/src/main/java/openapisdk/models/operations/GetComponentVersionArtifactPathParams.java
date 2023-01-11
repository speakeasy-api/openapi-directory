package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetComponentVersionArtifactPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=arn")
    public String arn;
    public GetComponentVersionArtifactPathParams withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=artifactName")
    public String artifactName;
    public GetComponentVersionArtifactPathParams withArtifactName(String artifactName) {
        this.artifactName = artifactName;
        return this;
    }
}