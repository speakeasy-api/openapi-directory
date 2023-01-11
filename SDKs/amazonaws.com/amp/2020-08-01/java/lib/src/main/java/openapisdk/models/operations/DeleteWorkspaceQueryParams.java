package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkspaceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteWorkspaceQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}