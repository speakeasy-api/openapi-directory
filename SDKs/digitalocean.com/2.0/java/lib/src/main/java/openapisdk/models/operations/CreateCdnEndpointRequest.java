package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCdnEndpointRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItemsInput request;
    public CreateCdnEndpointRequest withRequest(openapisdk.models.shared.Onev21cdn1endpointsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesEndpointsItemsInput request) {
        this.request = request;
        return this;
    }
}