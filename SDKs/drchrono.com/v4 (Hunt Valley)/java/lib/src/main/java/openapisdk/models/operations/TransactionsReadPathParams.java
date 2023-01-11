package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class TransactionsReadPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public TransactionsReadPathParams withId(String id) {
        this.id = id;
        return this;
    }
}