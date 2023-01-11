package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFormByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetFormByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}