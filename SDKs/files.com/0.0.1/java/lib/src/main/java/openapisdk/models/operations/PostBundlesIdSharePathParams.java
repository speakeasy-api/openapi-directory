package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundlesIdSharePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Integer id;
    public PostBundlesIdSharePathParams withId(Integer id) {
        this.id = id;
        return this;
    }
}