package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesOnePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FilesOnePathParams withId(String id) {
        this.id = id;
        return this;
    }
}