package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetShareByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetShareByIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}