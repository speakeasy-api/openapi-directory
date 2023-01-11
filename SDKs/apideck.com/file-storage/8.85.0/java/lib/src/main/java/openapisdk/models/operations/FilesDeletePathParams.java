package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FilesDeletePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public String id;
    public FilesDeletePathParams withId(String id) {
        this.id = id;
        return this;
    }
}