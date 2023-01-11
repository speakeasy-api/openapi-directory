package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchFileCommentsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PatchFileCommentsIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}