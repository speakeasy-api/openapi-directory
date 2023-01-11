package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFileFromUriIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=uri")
    public String uri;
    public GetFileFromUriIdPathParams withUri(String uri) {
        this.uri = uri;
        return this;
    }
}