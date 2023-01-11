package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BillingProfileCptCodes
 * CPT Code object
**/
public class BillingProfileCptCodes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public BillingProfileCptCodes withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnosis_pointers_icd10")
    public String[] diagnosisPointersIcd10;
    public BillingProfileCptCodes withDiagnosisPointersIcd10(String[] diagnosisPointersIcd10) {
        this.diagnosisPointersIcd10 = diagnosisPointersIcd10;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("diagnosis_pointers_icd9")
    public String[] diagnosisPointersIcd9;
    public BillingProfileCptCodes withDiagnosisPointersIcd9(String[] diagnosisPointersIcd9) {
        this.diagnosisPointersIcd9 = diagnosisPointersIcd9;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modifiers")
    public String[] modifiers;
    public BillingProfileCptCodes withModifiers(String[] modifiers) {
        this.modifiers = modifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ndc_code")
    public BillingProfileCptCodesNdcCode[] ndcCode;
    public BillingProfileCptCodes withNdcCode(BillingProfileCptCodesNdcCode[] ndcCode) {
        this.ndcCode = ndcCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("price")
    public String price;
    public BillingProfileCptCodes withPrice(String price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quantity")
    public String quantity;
    public BillingProfileCptCodes withQuantity(String quantity) {
        this.quantity = quantity;
        return this;
    }
}