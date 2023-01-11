package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateApiQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public CreateApiQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}