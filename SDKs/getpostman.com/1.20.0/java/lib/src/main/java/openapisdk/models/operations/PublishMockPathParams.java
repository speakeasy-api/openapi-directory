package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PublishMockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mock_uid")
    public String mockUid;
    public PublishMockPathParams withMockUid(String mockUid) {
        this.mockUid = mockUid;
        return this;
    }
}