package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetContentByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=contentId")
    public Long contentId;
    public GetContentByIdPathParams withContentId(Long contentId) {
        this.contentId = contentId;
        return this;
    }
}