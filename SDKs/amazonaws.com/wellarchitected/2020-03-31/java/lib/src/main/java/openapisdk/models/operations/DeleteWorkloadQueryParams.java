package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkloadQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientRequestToken")
    public String clientRequestToken;
    public DeleteWorkloadQueryParams withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
}