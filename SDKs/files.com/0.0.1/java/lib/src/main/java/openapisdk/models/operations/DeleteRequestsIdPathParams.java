package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteRequestsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteRequestsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}