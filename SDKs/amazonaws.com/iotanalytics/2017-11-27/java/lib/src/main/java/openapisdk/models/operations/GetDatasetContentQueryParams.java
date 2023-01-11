package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDatasetContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionId")
    public String versionId;
    public GetDatasetContentQueryParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}