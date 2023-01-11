package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ValidateSecurityProfileBehaviorsRequest {
    public ValidateSecurityProfileBehaviorsHeaders headers;
    public ValidateSecurityProfileBehaviorsRequest withHeaders(ValidateSecurityProfileBehaviorsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public ValidateSecurityProfileBehaviorsRequestBody request;
    public ValidateSecurityProfileBehaviorsRequest withRequest(ValidateSecurityProfileBehaviorsRequestBody request) {
        this.request = request;
        return this;
    }
}