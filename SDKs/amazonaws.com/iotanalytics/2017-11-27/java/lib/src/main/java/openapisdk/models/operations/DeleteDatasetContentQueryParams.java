package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDatasetContentQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=versionId")
    public String versionId;
    public DeleteDatasetContentQueryParams withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
}