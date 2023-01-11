package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfileCustomProcedureCodes
 * Custom procedure code object
**/
public class BillingProfileCustomProcedureCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public BillingProfileCustomProcedureCodes withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public BillingProfileCustomProcedureCodes withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public BillingProfileCustomProcedureCodes withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
}