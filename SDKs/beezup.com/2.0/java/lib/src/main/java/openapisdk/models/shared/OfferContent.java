package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferContent {
    @JsonProperty("contractBillingPeriodInfo")
    public ContractBillingPeriodInfo contractBillingPeriodInfo;
    public OfferContent withContractBillingPeriodInfo(ContractBillingPeriodInfo contractBillingPeriodInfo) {
        this.contractBillingPeriodInfo = contractBillingPeriodInfo;
        return this;
    }
    @JsonProperty("contractBonusInfo")
    public ContractBonusInfo contractBonusInfo;
    public OfferContent withContractBonusInfo(ContractBonusInfo contractBonusInfo) {
        this.contractBonusInfo = contractBonusInfo;
        return this;
    }
    @JsonProperty("contractClickInfo")
    public ContractClickInfo contractClickInfo;
    public OfferContent withContractClickInfo(ContractClickInfo contractClickInfo) {
        this.contractClickInfo = contractClickInfo;
        return this;
    }
    @JsonProperty("contractCommitmentInfo")
    public ContractCommitmentInfo contractCommitmentInfo;
    public OfferContent withContractCommitmentInfo(ContractCommitmentInfo contractCommitmentInfo) {
        this.contractCommitmentInfo = contractCommitmentInfo;
        return this;
    }
    @JsonProperty("contractDiscountInfo")
    public ContractDiscountInfo contractDiscountInfo;
    public OfferContent withContractDiscountInfo(ContractDiscountInfo contractDiscountInfo) {
        this.contractDiscountInfo = contractDiscountInfo;
        return this;
    }
    @JsonProperty("contractMoneyInfo")
    public ContractMoneyInfo contractMoneyInfo;
    public OfferContent withContractMoneyInfo(ContractMoneyInfo contractMoneyInfo) {
        this.contractMoneyInfo = contractMoneyInfo;
        return this;
    }
    @JsonProperty("contractStoreInfo")
    public ContractStoreInfo contractStoreInfo;
    public OfferContent withContractStoreInfo(ContractStoreInfo contractStoreInfo) {
        this.contractStoreInfo = contractStoreInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractTerminationReason")
    public String contractTerminationReason;
    public OfferContent withContractTerminationReason(String contractTerminationReason) {
        this.contractTerminationReason = contractTerminationReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractTerminationReasonType")
    public Integer contractTerminationReasonType;
    public OfferContent withContractTerminationReasonType(Integer contractTerminationReasonType) {
        this.contractTerminationReasonType = contractTerminationReasonType;
        return this;
    }
    @JsonProperty("notifyVatExemption")
    public Boolean notifyVatExemption;
    public OfferContent withNotifyVatExemption(Boolean notifyVatExemption) {
        this.notifyVatExemption = notifyVatExemption;
        return this;
    }
    @JsonProperty("previousFixPeriodInvoiceProrataInfo")
    public PreviousFixPeriodInvoiceProrataInfo previousFixPeriodInvoiceProrataInfo;
    public OfferContent withPreviousFixPeriodInvoiceProrataInfo(PreviousFixPeriodInvoiceProrataInfo previousFixPeriodInvoiceProrataInfo) {
        this.previousFixPeriodInvoiceProrataInfo = previousFixPeriodInvoiceProrataInfo;
        return this;
    }
}