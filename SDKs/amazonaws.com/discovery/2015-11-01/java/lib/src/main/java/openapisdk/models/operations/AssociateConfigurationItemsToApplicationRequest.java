package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AssociateConfigurationItemsToApplicationRequest {
    public AssociateConfigurationItemsToApplicationHeaders headers;
    public AssociateConfigurationItemsToApplicationRequest withHeaders(AssociateConfigurationItemsToApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.AssociateConfigurationItemsToApplicationRequest request;
    public AssociateConfigurationItemsToApplicationRequest withRequest(openapisdk.models.shared.AssociateConfigurationItemsToApplicationRequest request) {
        this.request = request;
        return this;
    }
}