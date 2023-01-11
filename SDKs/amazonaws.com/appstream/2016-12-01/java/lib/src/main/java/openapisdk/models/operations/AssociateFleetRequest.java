package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateFleetRequest {
    public AssociateFleetHeaders headers;
    public AssociateFleetRequest withHeaders(AssociateFleetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateFleetRequest request;
    public AssociateFleetRequest withRequest(openapisdk.models.shared.AssociateFleetRequest request) {
        this.request = request;
        return this;
    }
}