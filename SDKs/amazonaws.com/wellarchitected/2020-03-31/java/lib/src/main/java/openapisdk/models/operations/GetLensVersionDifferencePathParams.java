package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLensVersionDifferencePathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=LensAlias")
    public String lensAlias;
    public GetLensVersionDifferencePathParams withLensAlias(String lensAlias) {
        this.lensAlias = lensAlias;
        return this;
    }
}