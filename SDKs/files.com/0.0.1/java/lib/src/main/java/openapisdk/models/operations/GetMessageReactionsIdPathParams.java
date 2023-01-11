package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetMessageReactionsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetMessageReactionsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}