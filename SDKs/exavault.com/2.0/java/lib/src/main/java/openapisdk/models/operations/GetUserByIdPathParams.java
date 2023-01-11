package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUserByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetUserByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}