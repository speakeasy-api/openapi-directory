package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAccessPreviewFindingsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=accessPreviewId")
    public String accessPreviewId;
    public ListAccessPreviewFindingsPathParams withAccessPreviewId(String accessPreviewId) {
        this.accessPreviewId = accessPreviewId;
        return this;
    }
}