package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateReturnShippingLabelRequest {
    @JsonProperty("JobId")
    public String jobId;
    public CreateReturnShippingLabelRequest withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ShippingOption")
    public ShippingOptionEnum shippingOption;
    public CreateReturnShippingLabelRequest withShippingOption(ShippingOptionEnum shippingOption) {
        this.shippingOption = shippingOption;
        return this;
    }
}