package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAppsIdPkcs12PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PostAppsIdPkcs12PathParams withId(String id) {
        this.id = id;
        return this;
    }
}