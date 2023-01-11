package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PutObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Path")
    public String path;
    public PutObjectPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}