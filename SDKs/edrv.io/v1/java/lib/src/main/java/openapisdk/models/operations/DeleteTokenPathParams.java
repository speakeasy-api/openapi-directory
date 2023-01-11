package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTokenPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public DeleteTokenPathParams withId(String id) {
        this.id = id;
        return this;
    }
}