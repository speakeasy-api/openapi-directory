package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteWorkloadShareQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ClientRequestToken")
    public String clientRequestToken;
    public DeleteWorkloadShareQueryParams withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
}