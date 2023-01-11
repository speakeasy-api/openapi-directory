package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateArtifactQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canonical")
    public Boolean canonical;
    public CreateArtifactQueryParams withCanonical(Boolean canonical) {
        this.canonical = canonical;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ifExists")
    public openapisdk.models.shared.IfExistsEnum ifExists;
    public CreateArtifactQueryParams withIfExists(openapisdk.models.shared.IfExistsEnum ifExists) {
        this.ifExists = ifExists;
        return this;
    }
}