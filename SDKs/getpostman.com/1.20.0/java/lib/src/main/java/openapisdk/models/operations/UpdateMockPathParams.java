package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateMockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mock_uid")
    public String mockUid;
    public UpdateMockPathParams withMockUid(String mockUid) {
        this.mockUid = mockUid;
        return this;
    }
}