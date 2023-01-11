package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessPreviewPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPreviewId")
    public String accessPreviewId;
    public GetAccessPreviewPathParams withAccessPreviewId(String accessPreviewId) {
        this.accessPreviewId = accessPreviewId;
        return this;
    }
}