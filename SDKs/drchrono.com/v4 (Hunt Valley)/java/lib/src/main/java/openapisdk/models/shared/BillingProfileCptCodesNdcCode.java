package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfileCptCodesNdcCode
 * NDC code object
**/
public class BillingProfileCptCodesNdcCode {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ndc_package_code")
    public String ndcPackageCode;
    public BillingProfileCptCodesNdcCode withNdcPackageCode(String ndcPackageCode) {
        this.ndcPackageCode = ndcPackageCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public BillingProfileCptCodesNdcCode withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("units")
    public BillingProfileCptCodesNdcCodeUnitsEnum units;
    public BillingProfileCptCodesNdcCode withUnits(BillingProfileCptCodesNdcCodeUnitsEnum units) {
        this.units = units;
        return this;
    }
}