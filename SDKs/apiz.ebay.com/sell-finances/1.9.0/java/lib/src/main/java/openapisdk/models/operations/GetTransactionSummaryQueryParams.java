package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionSummaryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filter")
    public String filter;
    public GetTransactionSummaryQueryParams withFilter(String filter) {
        this.filter = filter;
        return this;
    }
}