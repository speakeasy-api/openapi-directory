package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTrackQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=trackingNumber")
    public String trackingNumber;
    public GetTrackQueryParams withTrackingNumber(String trackingNumber) {
        this.trackingNumber = trackingNumber;
        return this;
    }
}