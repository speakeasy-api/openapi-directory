package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBillingGroupRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingGroupProperties")
    public CreateBillingGroupRequestBodyBillingGroupProperties billingGroupProperties;
    public CreateBillingGroupRequestBody withBillingGroupProperties(CreateBillingGroupRequestBodyBillingGroupProperties billingGroupProperties) {
        this.billingGroupProperties = billingGroupProperties;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public openapisdk.models.shared.Tag[] tags;
    public CreateBillingGroupRequestBody withTags(openapisdk.models.shared.Tag[] tags) {
        this.tags = tags;
        return this;
    }
}