package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebhookQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=workspace")
    public String workspace;
    public CreateWebhookQueryParams withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}