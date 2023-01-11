package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateShareByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UpdateShareByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}