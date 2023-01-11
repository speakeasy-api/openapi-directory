package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetApiKeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}