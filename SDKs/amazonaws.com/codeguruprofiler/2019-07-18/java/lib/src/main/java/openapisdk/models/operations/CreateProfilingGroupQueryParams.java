package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProfilingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public CreateProfilingGroupQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}