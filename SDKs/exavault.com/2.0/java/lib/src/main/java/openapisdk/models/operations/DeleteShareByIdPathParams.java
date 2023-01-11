package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteShareByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteShareByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}