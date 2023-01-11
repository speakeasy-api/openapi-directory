package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class BacerRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public BacerRequestBody request;
    public BacerRequest withRequest(BacerRequestBody request) {
        this.request = request;
        return this;
    }
    public BacerSecurity security;
    public BacerRequest withSecurity(BacerSecurity security) {
        this.security = security;
        return this;
    }
}