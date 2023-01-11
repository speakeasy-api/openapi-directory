package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteMockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mock_uid")
    public String mockUid;
    public DeleteMockPathParams withMockUid(String mockUid) {
        this.mockUid = mockUid;
        return this;
    }
}