package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteLocksPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=token")
    public String token;
    public DeleteLocksPathQueryParams withToken(String token) {
        this.token = token;
        return this;
    }
}