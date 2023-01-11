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

public class Order {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_date")
    public LocalDate closedDate;
    public Order withClosedDate(LocalDate closedDate) {
        this.closedDate = closedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Order withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created_by")
    public String createdBy;
    public Order withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public Order withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public Order withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public OrderCustomers[] customers;
    public Order withCustomers(OrderCustomers[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discounts")
    public OrderDiscounts[] discounts;
    public Order withDiscounts(OrderDiscounts[] discounts) {
        this.discounts = discounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public Order withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillments")
    public OrderFulfillments[] fulfillments;
    public Order withFulfillments(OrderFulfillments[] fulfillments) {
        this.fulfillments = fulfillments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Order withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public Order withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_items")
    public OrderLineItems[] lineItems;
    public Order withLineItems(OrderLineItems[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonProperty("location_id")
    public String locationId;
    public Order withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonProperty("merchant_id")
    public String merchantId;
    public Order withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public Order withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_date")
    public LocalDate orderDate;
    public Order withOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_number")
    public String orderNumber;
    public Order withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_type_id")
    public String orderTypeId;
    public Order withOrderTypeId(String orderTypeId) {
        this.orderTypeId = orderTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_status")
    public OrderPosPaymentStatusEnum paymentStatus;
    public Order withPaymentStatus(OrderPosPaymentStatusEnum paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public OrderPayments[] payments;
    public Order withPayments(OrderPayments[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_id")
    public String referenceId;
    public Order withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded")
    public Boolean refunded;
    public Order withRefunded(Boolean refunded) {
        this.refunded = refunded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds")
    public OrderRefunds[] refunds;
    public Order withRefunds(OrderRefunds[] refunds) {
        this.refunds = refunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seat")
    public String seat;
    public Order withSeat(String seat) {
        this.seat = seat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_charges")
    public ServiceCharge[] serviceCharges;
    public Order withServiceCharges(ServiceCharge[] serviceCharges) {
        this.serviceCharges = serviceCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("source")
    public OrderSourceEnum source;
    public Order withSource(OrderSourceEnum source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderStatusEnum status;
    public Order withStatus(OrderStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public Order withTable(String table) {
        this.table = table;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public Object[] taxes;
    public Order withTaxes(Object[] taxes) {
        this.taxes = taxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenders")
    public OrderTenders[] tenders;
    public Order withTenders(OrderTenders[] tenders) {
        this.tenders = tenders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Order withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Long totalAmount;
    public Order withTotalAmount(Long totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_discount")
    public Long totalDiscount;
    public Order withTotalDiscount(Long totalDiscount) {
        this.totalDiscount = totalDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_refund")
    public Long totalRefund;
    public Order withTotalRefund(Long totalRefund) {
        this.totalRefund = totalRefund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_service_charge")
    public Long totalServiceCharge;
    public Order withTotalServiceCharge(Long totalServiceCharge) {
        this.totalServiceCharge = totalServiceCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tax")
    public Long totalTax;
    public Order withTotalTax(Long totalTax) {
        this.totalTax = totalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tip")
    public Long totalTip;
    public Order withTotalTip(Long totalTip) {
        this.totalTip = totalTip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Order withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("updated_by")
    public String updatedBy;
    public Order withUpdatedBy(String updatedBy) {
        this.updatedBy = updatedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Order withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided")
    public Boolean voided;
    public Order withVoided(Boolean voided) {
        this.voided = voided;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("voided_at")
    public OffsetDateTime voidedAt;
    public Order withVoidedAt(OffsetDateTime voidedAt) {
        this.voidedAt = voidedAt;
        return this;
    }
}