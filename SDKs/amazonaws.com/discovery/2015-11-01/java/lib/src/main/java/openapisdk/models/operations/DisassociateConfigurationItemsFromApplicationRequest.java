package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisassociateConfigurationItemsFromApplicationRequest {
    public DisassociateConfigurationItemsFromApplicationHeaders headers;
    public DisassociateConfigurationItemsFromApplicationRequest withHeaders(DisassociateConfigurationItemsFromApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisassociateConfigurationItemsFromApplicationRequest request;
    public DisassociateConfigurationItemsFromApplicationRequest withRequest(openapisdk.models.shared.DisassociateConfigurationItemsFromApplicationRequest request) {
        this.request = request;
        return this;
    }
}