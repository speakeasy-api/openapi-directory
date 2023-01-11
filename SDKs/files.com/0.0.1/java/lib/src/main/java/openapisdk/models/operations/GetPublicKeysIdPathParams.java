package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetPublicKeysIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetPublicKeysIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}