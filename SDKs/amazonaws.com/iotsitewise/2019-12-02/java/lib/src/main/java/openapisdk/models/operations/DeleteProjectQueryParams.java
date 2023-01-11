package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteProjectQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteProjectQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}