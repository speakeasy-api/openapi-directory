package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddUserRequest {
    public AddUserPathParams pathParams;
    public AddUserRequest withPathParams(AddUserPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput request;
    public AddUserRequest withRequest(openapisdk.models.shared.Onev21databasesGetResponses200ContentApplication1jsonSchemaPropertiesDatabasesItemsPropertiesUsersItemsInput request) {
        this.request = request;
        return this;
    }
}