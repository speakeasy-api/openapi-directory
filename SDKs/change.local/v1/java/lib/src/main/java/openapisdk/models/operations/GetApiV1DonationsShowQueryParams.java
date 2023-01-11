package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1DonationsShowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=id")
    public String id;
    public GetApiV1DonationsShowQueryParams withId(String id) {
        this.id = id;
        return this;
    }
}