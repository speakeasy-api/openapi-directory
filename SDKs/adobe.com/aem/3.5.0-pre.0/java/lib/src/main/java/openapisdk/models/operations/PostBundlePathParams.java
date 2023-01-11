package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostBundlePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public PostBundlePathParams withName(String name) {
        this.name = name;
        return this;
    }
}