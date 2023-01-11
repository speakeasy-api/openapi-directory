package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfileHcpcsCodesNdcCode
 * NDC code object
**/
public class BillingProfileHcpcsCodesNdcCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ndc_package_code")
    public String ndcPackageCode;
    public BillingProfileHcpcsCodesNdcCode withNdcPackageCode(String ndcPackageCode) {
        this.ndcPackageCode = ndcPackageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public BillingProfileHcpcsCodesNdcCode withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public BillingProfileHcpcsCodesNdcCodeUnitsEnum units;
    public BillingProfileHcpcsCodesNdcCode withUnits(BillingProfileHcpcsCodesNdcCodeUnitsEnum units) {
        this.units = units;
        return this;
    }
}