package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaultItemsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetVaultItemsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}