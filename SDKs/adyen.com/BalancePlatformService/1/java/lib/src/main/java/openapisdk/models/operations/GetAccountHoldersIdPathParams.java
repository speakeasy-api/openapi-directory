package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccountHoldersIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public GetAccountHoldersIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}