package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWebAclMigrationStackRequest {
    public CreateWebAclMigrationStackHeaders headers;
    public CreateWebAclMigrationStackRequest withHeaders(CreateWebAclMigrationStackHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateWebAclMigrationStackRequest request;
    public CreateWebAclMigrationStackRequest withRequest(openapisdk.models.shared.CreateWebAclMigrationStackRequest request) {
        this.request = request;
        return this;
    }
}