package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFormFieldSetsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteFormFieldSetsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}