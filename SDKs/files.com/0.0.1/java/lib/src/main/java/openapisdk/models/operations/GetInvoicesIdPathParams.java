package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetInvoicesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetInvoicesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}