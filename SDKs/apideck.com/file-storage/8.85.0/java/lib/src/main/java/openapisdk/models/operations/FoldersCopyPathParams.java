package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FoldersCopyPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FoldersCopyPathParams withId(String id) {
        this.id = id;
        return this;
    }
}