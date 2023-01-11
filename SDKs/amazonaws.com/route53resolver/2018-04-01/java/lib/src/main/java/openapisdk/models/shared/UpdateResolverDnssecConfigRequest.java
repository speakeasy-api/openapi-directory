package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateResolverDnssecConfigRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public UpdateResolverDnssecConfigRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("Validation")
    public ValidationEnum validation;
    public UpdateResolverDnssecConfigRequest withValidation(ValidationEnum validation) {
        this.validation = validation;
        return this;
    }
}