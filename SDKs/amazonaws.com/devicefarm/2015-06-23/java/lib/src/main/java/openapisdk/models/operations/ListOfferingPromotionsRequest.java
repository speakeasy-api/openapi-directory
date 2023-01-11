package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListOfferingPromotionsRequest {
    public ListOfferingPromotionsHeaders headers;
    public ListOfferingPromotionsRequest withHeaders(ListOfferingPromotionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListOfferingPromotionsRequest request;
    public ListOfferingPromotionsRequest withRequest(openapisdk.models.shared.ListOfferingPromotionsRequest request) {
        this.request = request;
        return this;
    }
}