package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnableImportFindingsForProductResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductSubscriptionArn")
    public String productSubscriptionArn;
    public EnableImportFindingsForProductResponse withProductSubscriptionArn(String productSubscriptionArn) {
        this.productSubscriptionArn = productSubscriptionArn;
        return this;
    }
}