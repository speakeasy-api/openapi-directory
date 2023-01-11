package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteBundlesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public DeleteBundlesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}