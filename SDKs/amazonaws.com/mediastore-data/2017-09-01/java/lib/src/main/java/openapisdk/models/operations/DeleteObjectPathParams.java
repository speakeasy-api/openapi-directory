package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Path")
    public String path;
    public DeleteObjectPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}