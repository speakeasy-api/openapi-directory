package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ResolveCustomerResult
 * The result of the ResolveCustomer operation. Contains the CustomerIdentifier and product code.
**/
public class ResolveCustomerResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomerIdentifier")
    public String customerIdentifier;
    public ResolveCustomerResult withCustomerIdentifier(String customerIdentifier) {
        this.customerIdentifier = customerIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProductCode")
    public String productCode;
    public ResolveCustomerResult withProductCode(String productCode) {
        this.productCode = productCode;
        return this;
    }
}