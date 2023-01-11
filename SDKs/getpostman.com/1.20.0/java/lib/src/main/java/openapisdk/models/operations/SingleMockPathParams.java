package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SingleMockPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=mock_uid")
    public String mockUid;
    public SingleMockPathParams withMockUid(String mockUid) {
        this.mockUid = mockUid;
        return this;
    }
}