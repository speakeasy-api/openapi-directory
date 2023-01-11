package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBundlesIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public GetBundlesIdPathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}