package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteApplicationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteApplicationQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}