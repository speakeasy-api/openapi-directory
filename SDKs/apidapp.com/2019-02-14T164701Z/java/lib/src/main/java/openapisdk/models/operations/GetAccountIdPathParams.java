package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAccountIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}