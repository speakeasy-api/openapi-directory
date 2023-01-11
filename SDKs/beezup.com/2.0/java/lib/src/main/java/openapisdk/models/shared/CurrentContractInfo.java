package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CurrentContractInfo
 * Get the conditions of your current contract
**/
public class CurrentContractInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalClickPrice")
    public Double additionalClickPrice;
    public CurrentContractInfo withAdditionalClickPrice(Double additionalClickPrice) {
        this.additionalClickPrice = additionalClickPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodInMonth")
    public Integer billingPeriodInMonth;
    public CurrentContractInfo withBillingPeriodInMonth(Integer billingPeriodInMonth) {
        this.billingPeriodInMonth = billingPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("billingPeriodPercentDiscount")
    public Double billingPeriodPercentDiscount;
    public CurrentContractInfo withBillingPeriodPercentDiscount(Double billingPeriodPercentDiscount) {
        this.billingPeriodPercentDiscount = billingPeriodPercentDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clickIncluded")
    public Integer clickIncluded;
    public CurrentContractInfo withClickIncluded(Integer clickIncluded) {
        this.clickIncluded = clickIncluded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("commitmentCalculatedFinishUtcDate")
    public OffsetDateTime commitmentCalculatedFinishUtcDate;
    public CurrentContractInfo withCommitmentCalculatedFinishUtcDate(OffsetDateTime commitmentCalculatedFinishUtcDate) {
        this.commitmentCalculatedFinishUtcDate = commitmentCalculatedFinishUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentPeriodInMonth")
    public Integer commitmentPeriodInMonth;
    public CurrentContractInfo withCommitmentPeriodInMonth(Integer commitmentPeriodInMonth) {
        this.commitmentPeriodInMonth = commitmentPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractId")
    public String contractId;
    public CurrentContractInfo withContractId(String contractId) {
        this.contractId = contractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currencyCode")
    public String currencyCode;
    public CurrentContractInfo withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discountDurationInMonth")
    public Integer discountDurationInMonth;
    public CurrentContractInfo withDiscountDurationInMonth(Integer discountDurationInMonth) {
        this.discountDurationInMonth = discountDurationInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("discountEndUtcDate")
    public OffsetDateTime discountEndUtcDate;
    public CurrentContractInfo withDiscountEndUtcDate(OffsetDateTime discountEndUtcDate) {
        this.discountEndUtcDate = discountEndUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedAndVariableClickInfo")
    public FixedAndVariableClickModelInfo fixedAndVariableClickInfo;
    public CurrentContractInfo withFixedAndVariableClickInfo(FixedAndVariableClickModelInfo fixedAndVariableClickInfo) {
        this.fixedAndVariableClickInfo = fixedAndVariableClickInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedPrice")
    public Double fixedPrice;
    public CurrentContractInfo withFixedPrice(Double fixedPrice) {
        this.fixedPrice = fixedPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipUserCreation")
    public String ipUserCreation;
    public CurrentContractInfo withIpUserCreation(String ipUserCreation) {
        this.ipUserCreation = ipUserCreation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ipUserModification")
    public String ipUserModification;
    public CurrentContractInfo withIpUserModification(String ipUserModification) {
        this.ipUserModification = ipUserModification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCommitmentRenewalAutomatically")
    public Boolean isCommitmentRenewalAutomatically;
    public CurrentContractInfo withIsCommitmentRenewalAutomatically(Boolean isCommitmentRenewalAutomatically) {
        this.isCommitmentRenewalAutomatically = isCommitmentRenewalAutomatically;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isModifiableContract")
    public Boolean isModifiableContract;
    public CurrentContractInfo withIsModifiableContract(Boolean isModifiableContract) {
        this.isModifiableContract = isModifiableContract;
        return this;
    }
    @JsonProperty("links")
    public CurrentContractInfoLinks links;
    public CurrentContractInfo withLinks(CurrentContractInfoLinks links) {
        this.links = links;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public Integer offerId;
    public CurrentContractInfo withOfferId(Integer offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerName")
    public String offerName;
    public CurrentContractInfo withOfferName(String offerName) {
        this.offerName = offerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("percentDiscount")
    public Double percentDiscount;
    public CurrentContractInfo withPercentDiscount(Double percentDiscount) {
        this.percentDiscount = percentDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("startUtcDate")
    public OffsetDateTime startUtcDate;
    public CurrentContractInfo withStartUtcDate(OffsetDateTime startUtcDate) {
        this.startUtcDate = startUtcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("storeCount")
    public Integer storeCount;
    public CurrentContractInfo withStoreCount(Integer storeCount) {
        this.storeCount = storeCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialPeriodInMonth")
    public Integer trialPeriodInMonth;
    public CurrentContractInfo withTrialPeriodInMonth(Integer trialPeriodInMonth) {
        this.trialPeriodInMonth = trialPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableModelInfo")
    public VariableModelInfo variableModelInfo;
    public CurrentContractInfo withVariableModelInfo(VariableModelInfo variableModelInfo) {
        this.variableModelInfo = variableModelInfo;
        return this;
    }
}