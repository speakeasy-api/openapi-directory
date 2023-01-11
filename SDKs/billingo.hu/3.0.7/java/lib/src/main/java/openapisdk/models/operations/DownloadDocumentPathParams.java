package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DownloadDocumentPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=id")
    public Long id;
    public DownloadDocumentPathParams withId(Long id) {
        this.id = id;
        return this;
    }
}