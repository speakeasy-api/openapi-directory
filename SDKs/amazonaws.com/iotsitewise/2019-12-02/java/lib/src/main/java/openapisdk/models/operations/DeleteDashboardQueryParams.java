package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteDashboardQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=clientToken")
    public String clientToken;
    public DeleteDashboardQueryParams withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
}