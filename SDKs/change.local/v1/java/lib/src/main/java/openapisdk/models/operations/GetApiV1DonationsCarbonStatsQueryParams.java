package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1DonationsCarbonStatsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public Double id;
    public GetApiV1DonationsCarbonStatsQueryParams withId(Double id) {
        this.id = id;
        return this;
    }
}