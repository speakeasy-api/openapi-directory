package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateNumberOfDomainControllersRequest {
    public UpdateNumberOfDomainControllersHeaders headers;
    public UpdateNumberOfDomainControllersRequest withHeaders(UpdateNumberOfDomainControllersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.UpdateNumberOfDomainControllersRequest request;
    public UpdateNumberOfDomainControllersRequest withRequest(openapisdk.models.shared.UpdateNumberOfDomainControllersRequest request) {
        this.request = request;
        return this;
    }
}