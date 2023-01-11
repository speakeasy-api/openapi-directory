package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVaultsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetVaultsQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}