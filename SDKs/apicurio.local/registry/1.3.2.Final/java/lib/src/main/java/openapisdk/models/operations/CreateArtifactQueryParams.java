package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifExists")
    public CreateArtifactIfExistsEnum ifExists;
    public CreateArtifactQueryParams withIfExists(CreateArtifactIfExistsEnum ifExists) {
        this.ifExists = ifExists;
        return this;
    }
}