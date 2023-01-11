package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchAppsIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public PatchAppsIdPathParams withId(String id) {
        this.id = id;
        return this;
    }
}