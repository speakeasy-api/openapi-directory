package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDomainRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItemsInput request;
    public CreateDomainRequest withRequest(openapisdk.models.shared.Onev21domainsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesDomainsItemsInput request) {
        this.request = request;
        return this;
    }
}