package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BatchGetItemQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=RequestItems")
    public String requestItems;
    public BatchGetItemQueryParams withRequestItems(String requestItems) {
        this.requestItems = requestItems;
        return this;
    }
}