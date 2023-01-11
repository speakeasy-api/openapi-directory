package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetObjectPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Path")
    public String path;
    public GetObjectPathParams withPath(String path) {
        this.path = path;
        return this;
    }
}