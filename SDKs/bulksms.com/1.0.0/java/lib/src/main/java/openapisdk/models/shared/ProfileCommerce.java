package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProfileCommerce {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("address")
    public ProfileCommerceAddress address;
    public ProfileCommerce withAddress(ProfileCommerceAddress address) {
        this.address = address;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bankPaymentReference")
    public String bankPaymentReference;
    public ProfileCommerce withBankPaymentReference(String bankPaymentReference) {
        this.bankPaymentReference = bankPaymentReference;
        return this;
    }
}