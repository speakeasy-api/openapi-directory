package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class FetchBoundaryByIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=boundaryId")
    public String boundaryId;
    public FetchBoundaryByIdPathParams withBoundaryId(String boundaryId) {
        this.boundaryId = boundaryId;
        return this;
    }
}