package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class PosPayment {
    @JsonProperty("amount")
    public Double amount;
    public PosPayment withAmount(Double amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("app_fee")
    public Double appFee;
    public PosPayment withAppFee(Double appFee) {
        this.appFee = appFee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("approved")
    public Double approved;
    public PosPayment withApproved(Double approved) {
        this.approved = approved;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_account")
    public PosBankAccount bankAccount;
    public PosPayment withBankAccount(PosBankAccount bankAccount) {
        this.bankAccount = bankAccount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("card_details")
    public PosPaymentCardDetails cardDetails;
    public PosPayment withCardDetails(PosPaymentCardDetails cardDetails) {
        this.cardDetails = cardDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash")
    public PosPaymentCashDetails cash;
    public PosPayment withCash(PosPaymentCashDetails cash) {
        this.cash = cash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("change_back_cash_amount")
    public Double changeBackCashAmount;
    public PosPayment withChangeBackCashAmount(Double changeBackCashAmount) {
        this.changeBackCashAmount = changeBackCashAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public PosPayment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public PosPayment withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public PosPayment withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonProperty("customer_id")
    public String customerId;
    public PosPayment withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("device_id")
    public String deviceId;
    public PosPayment withDeviceId(String deviceId) {
        this.deviceId = deviceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public PosPayment withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_details")
    public PosPaymentExternalDetails externalDetails;
    public PosPayment withExternalDetails(PosPaymentExternalDetails externalDetails) {
        this.externalDetails = externalDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("external_payment_id")
    public String externalPaymentId;
    public PosPayment withExternalPaymentId(String externalPaymentId) {
        this.externalPaymentId = externalPaymentId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public PosPayment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public PosPayment withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location_id")
    public String locationId;
    public PosPayment withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merchant_id")
    public String merchantId;
    public PosPayment withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonProperty("order_id")
    public String orderId;
    public PosPayment withOrderId(String orderId) {
        this.orderId = orderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processing_fees")
    public Object[] processingFees;
    public PosPayment withProcessingFees(Object[] processingFees) {
        this.processingFees = processingFees;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded")
    public Double refunded;
    public PosPayment withRefunded(Double refunded) {
        this.refunded = refunded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_charges")
    public ServiceCharge[] serviceCharges;
    public PosPayment withServiceCharges(ServiceCharge[] serviceCharges) {
        this.serviceCharges = serviceCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public PosPaymentSourceEnum source;
    public PosPayment withSource(PosPaymentSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonProperty("source_id")
    public String sourceId;
    public PosPayment withSourceId(String sourceId) {
        this.sourceId = sourceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public PosPaymentStatusEnum status;
    public PosPayment withStatus(PosPaymentStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tax")
    public Double tax;
    public PosPayment withTax(Double tax) {
        this.tax = tax;
        return this;
    }
    @JsonProperty("tender_id")
    public String tenderId;
    public PosPayment withTenderId(String tenderId) {
        this.tenderId = tenderId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tip")
    public Double tip;
    public PosPayment withTip(Double tip) {
        this.tip = tip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public PosPayment withTotal(Double total) {
        this.total = total;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public PosPayment withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public PosPayment withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("wallet")
    public PosPaymentWalletDetails wallet;
    public PosPayment withWallet(PosPaymentWalletDetails wallet) {
        this.wallet = wallet;
        return this;
    }
}