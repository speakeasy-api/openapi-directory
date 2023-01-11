package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateFormByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public UpdateFormByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}