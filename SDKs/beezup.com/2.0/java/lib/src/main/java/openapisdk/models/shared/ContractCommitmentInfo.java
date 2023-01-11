package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ContractCommitmentInfo
 * Describe the commitment information related to the offer.
**/
public class ContractCommitmentInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialCreatorUserId")
    public String commercialCreatorUserId;
    public ContractCommitmentInfo withCommercialCreatorUserId(String commercialCreatorUserId) {
        this.commercialCreatorUserId = commercialCreatorUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commercialUserId")
    public String commercialUserId;
    public ContractCommitmentInfo withCommercialUserId(String commercialUserId) {
        this.commercialUserId = commercialUserId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentCalculatedFinishDate")
    public LocalDate commitmentCalculatedFinishDate;
    public ContractCommitmentInfo withCommitmentCalculatedFinishDate(LocalDate commitmentCalculatedFinishDate) {
        this.commitmentCalculatedFinishDate = commitmentCalculatedFinishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commitmentPeriodInMonth")
    public Integer commitmentPeriodInMonth;
    public ContractCommitmentInfo withCommitmentPeriodInMonth(Integer commitmentPeriodInMonth) {
        this.commitmentPeriodInMonth = commitmentPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contractType")
    public Integer contractType;
    public ContractCommitmentInfo withContractType(Integer contractType) {
        this.contractType = contractType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("couponOfferCode")
    public String couponOfferCode;
    public ContractCommitmentInfo withCouponOfferCode(String couponOfferCode) {
        this.couponOfferCode = couponOfferCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentContractId")
    public String currentContractId;
    public ContractCommitmentInfo withCurrentContractId(String currentContractId) {
        this.currentContractId = currentContractId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentContractTerminationDate")
    public LocalDate currentContractTerminationDate;
    public ContractCommitmentInfo withCurrentContractTerminationDate(LocalDate currentContractTerminationDate) {
        this.currentContractTerminationDate = currentContractTerminationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currentCustomerPaymentMethod")
    public PaymentMethodEnum currentCustomerPaymentMethod;
    public ContractCommitmentInfo withCurrentCustomerPaymentMethod(PaymentMethodEnum currentCustomerPaymentMethod) {
        this.currentCustomerPaymentMethod = currentCustomerPaymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fixedAndVariableClickInfo")
    public FixedAndVariableClickModelInfo fixedAndVariableClickInfo;
    public ContractCommitmentInfo withFixedAndVariableClickInfo(FixedAndVariableClickModelInfo fixedAndVariableClickInfo) {
        this.fixedAndVariableClickInfo = fixedAndVariableClickInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isCustomerWantsToTerminateHisContract")
    public Boolean isCustomerWantsToTerminateHisContract;
    public ContractCommitmentInfo withIsCustomerWantsToTerminateHisContract(Boolean isCustomerWantsToTerminateHisContract) {
        this.isCustomerWantsToTerminateHisContract = isCustomerWantsToTerminateHisContract;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isModelMustBeTransmittedInNewContract")
    public Boolean isModelMustBeTransmittedInNewContract;
    public ContractCommitmentInfo withIsModelMustBeTransmittedInNewContract(Boolean isModelMustBeTransmittedInNewContract) {
        this.isModelMustBeTransmittedInNewContract = isModelMustBeTransmittedInNewContract;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minBillingPeriodInMonths")
    public Integer minBillingPeriodInMonths;
    public ContractCommitmentInfo withMinBillingPeriodInMonths(Integer minBillingPeriodInMonths) {
        this.minBillingPeriodInMonths = minBillingPeriodInMonths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public String model;
    public ContractCommitmentInfo withModel(String model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("newContractStartDate")
    public OffsetDateTime newContractStartDate;
    public ContractCommitmentInfo withNewContractStartDate(OffsetDateTime newContractStartDate) {
        this.newContractStartDate = newContractStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerId")
    public Integer offerId;
    public ContractCommitmentInfo withOfferId(Integer offerId) {
        this.offerId = offerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("offerName")
    public String offerName;
    public ContractCommitmentInfo withOfferName(String offerName) {
        this.offerName = offerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentDelayInDays")
    public Integer paymentDelayInDays;
    public ContractCommitmentInfo withPaymentDelayInDays(Integer paymentDelayInDays) {
        this.paymentDelayInDays = paymentDelayInDays;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paymentMethodAuthorized")
    public PaymentMethodEnum paymentMethodAuthorized;
    public ContractCommitmentInfo withPaymentMethodAuthorized(PaymentMethodEnum paymentMethodAuthorized) {
        this.paymentMethodAuthorized = paymentMethodAuthorized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requestedPaymentMethod")
    public PaymentMethodEnum requestedPaymentMethod;
    public ContractCommitmentInfo withRequestedPaymentMethod(PaymentMethodEnum requestedPaymentMethod) {
        this.requestedPaymentMethod = requestedPaymentMethod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialPeriodFinishDate")
    public LocalDate trialPeriodFinishDate;
    public ContractCommitmentInfo withTrialPeriodFinishDate(LocalDate trialPeriodFinishDate) {
        this.trialPeriodFinishDate = trialPeriodFinishDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trialPeriodInMonth")
    public Integer trialPeriodInMonth;
    public ContractCommitmentInfo withTrialPeriodInMonth(Integer trialPeriodInMonth) {
        this.trialPeriodInMonth = trialPeriodInMonth;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variableModelInfo")
    public VariableModelInfo variableModelInfo;
    public ContractCommitmentInfo withVariableModelInfo(VariableModelInfo variableModelInfo) {
        this.variableModelInfo = variableModelInfo;
        return this;
    }
}