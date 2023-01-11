package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PosPaymentInput {
    @JsonProperty("amount")
    public Double amount;
    public PosPaymentInput withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_fee")
    public Double appFee;
    public PosPaymentInput withAppFee(Double appFee) {
        this.appFee = appFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Double approved;
    public PosPaymentInput withApproved(Double approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_account")
    public PosBankAccount bankAccount;
    public PosPaymentInput withBankAccount(PosBankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_details")
    public PosPaymentCardDetailsInput cardDetails;
    public PosPaymentInput withCardDetails(PosPaymentCardDetailsInput cardDetails) {
        this.cardDetails = cardDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash")
    public PosPaymentCashDetails cash;
    public PosPaymentInput withCash(PosPaymentCashDetails cash) {
        this.cash = cash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_back_cash_amount")
    public Double changeBackCashAmount;
    public PosPaymentInput withChangeBackCashAmount(Double changeBackCashAmount) {
        this.changeBackCashAmount = changeBackCashAmount;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public PosPaymentInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("customer_id")
    public String customerId;
    public PosPaymentInput withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_id")
    public String deviceId;
    public PosPaymentInput withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public PosPaymentInput withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_details")
    public PosPaymentExternalDetails externalDetails;
    public PosPaymentInput withExternalDetails(PosPaymentExternalDetails externalDetails) {
        this.externalDetails = externalDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_payment_id")
    public String externalPaymentId;
    public PosPaymentInput withExternalPaymentId(String externalPaymentId) {
        this.externalPaymentId = externalPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public PosPaymentInput withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public PosPaymentInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant_id")
    public String merchantId;
    public PosPaymentInput withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonProperty("order_id")
    public String orderId;
    public PosPaymentInput withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_fees")
    public Object[] processingFees;
    public PosPaymentInput withProcessingFees(Object[] processingFees) {
        this.processingFees = processingFees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded")
    public Double refunded;
    public PosPaymentInput withRefunded(Double refunded) {
        this.refunded = refunded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_charges")
    public ServiceChargeInput[] serviceCharges;
    public PosPaymentInput withServiceCharges(ServiceChargeInput[] serviceCharges) {
        this.serviceCharges = serviceCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public PosPaymentSourceEnum source;
    public PosPaymentInput withSource(PosPaymentSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonProperty("source_id")
    public String sourceId;
    public PosPaymentInput withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PosPaymentStatusEnum status;
    public PosPaymentInput withStatus(PosPaymentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Double tax;
    public PosPaymentInput withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonProperty("tender_id")
    public String tenderId;
    public PosPaymentInput withTenderId(String tenderId) {
        this.tenderId = tenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tip")
    public Double tip;
    public PosPaymentInput withTip(Double tip) {
        this.tip = tip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public PosPaymentInput withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wallet")
    public PosPaymentWalletDetails wallet;
    public PosPaymentInput withWallet(PosPaymentWalletDetails wallet) {
        this.wallet = wallet;
        return this;
    }
}