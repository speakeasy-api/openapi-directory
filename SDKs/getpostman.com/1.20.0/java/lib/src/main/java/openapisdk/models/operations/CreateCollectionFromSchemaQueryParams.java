package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCollectionFromSchemaQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public CreateCollectionFromSchemaQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}