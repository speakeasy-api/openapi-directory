package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateBillingGroupRequestBody {
    @JsonProperty("billingGroupProperties")
    public UpdateBillingGroupRequestBodyBillingGroupProperties billingGroupProperties;
    public UpdateBillingGroupRequestBody withBillingGroupProperties(UpdateBillingGroupRequestBodyBillingGroupProperties billingGroupProperties) {
        this.billingGroupProperties = billingGroupProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("expectedVersion")
    public Long expectedVersion;
    public UpdateBillingGroupRequestBody withExpectedVersion(Long expectedVersion) {
        this.expectedVersion = expectedVersion;
        return this;
    }
}