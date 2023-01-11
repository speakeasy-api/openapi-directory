package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSshKeyRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput request;
    public CreateSshKeyRequest withRequest(openapisdk.models.shared.Onev21account1keysGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesSshKeysItemsInput request) {
        this.request = request;
        return this;
    }
}