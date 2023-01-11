package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAForkQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public CreateAForkQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}