package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetLatestTotalsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=format")
    public GetLatestTotalsFormatEnum format;
    public GetLatestTotalsQueryParams withFormat(GetLatestTotalsFormatEnum format) {
        this.format = format;
        return this;
    }
}