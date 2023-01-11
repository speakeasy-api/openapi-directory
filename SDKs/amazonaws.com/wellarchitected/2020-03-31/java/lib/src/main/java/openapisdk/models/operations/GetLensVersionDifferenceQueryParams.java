package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLensVersionDifferenceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=BaseLensVersion")
    public String baseLensVersion;
    public GetLensVersionDifferenceQueryParams withBaseLensVersion(String baseLensVersion) {
        this.baseLensVersion = baseLensVersion;
        return this;
    }
}