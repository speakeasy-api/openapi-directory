package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetArtifactVersionMetaDataByContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=canonical")
    public Boolean canonical;
    public GetArtifactVersionMetaDataByContentQueryParams withCanonical(Boolean canonical) {
        this.canonical = canonical;
        return this;
    }
}