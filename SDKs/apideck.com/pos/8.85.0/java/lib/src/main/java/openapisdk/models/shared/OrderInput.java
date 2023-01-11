package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OrderInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("closed_date")
    public LocalDate closedDate;
    public OrderInput withClosedDate(LocalDate closedDate) {
        this.closedDate = closedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public CurrencyEnum currency;
    public OrderInput withCurrency(CurrencyEnum currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customer_id")
    public String customerId;
    public OrderInput withCustomerId(String customerId) {
        this.customerId = customerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customers")
    public OrderCustomers[] customers;
    public OrderInput withCustomers(OrderCustomers[] customers) {
        this.customers = customers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("discounts")
    public OrderDiscountsInput[] discounts;
    public OrderInput withDiscounts(OrderDiscountsInput[] discounts) {
        this.discounts = discounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("employee_id")
    public String employeeId;
    public OrderInput withEmployeeId(String employeeId) {
        this.employeeId = employeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fulfillments")
    public OrderFulfillmentsInput[] fulfillments;
    public OrderInput withFulfillments(OrderFulfillmentsInput[] fulfillments) {
        this.fulfillments = fulfillments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("idempotency_key")
    public String idempotencyKey;
    public OrderInput withIdempotencyKey(String idempotencyKey) {
        this.idempotencyKey = idempotencyKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("line_items")
    public OrderLineItemsInput[] lineItems;
    public OrderInput withLineItems(OrderLineItemsInput[] lineItems) {
        this.lineItems = lineItems;
        return this;
    }
    @JsonProperty("location_id")
    public String locationId;
    public OrderInput withLocationId(String locationId) {
        this.locationId = locationId;
        return this;
    }
    @JsonProperty("merchant_id")
    public String merchantId;
    public OrderInput withMerchantId(String merchantId) {
        this.merchantId = merchantId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public OrderInput withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_date")
    public LocalDate orderDate;
    public OrderInput withOrderDate(LocalDate orderDate) {
        this.orderDate = orderDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_number")
    public String orderNumber;
    public OrderInput withOrderNumber(String orderNumber) {
        this.orderNumber = orderNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("order_type_id")
    public String orderTypeId;
    public OrderInput withOrderTypeId(String orderTypeId) {
        this.orderTypeId = orderTypeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payment_status")
    public OrderPosPaymentStatusEnum paymentStatus;
    public OrderInput withPaymentStatus(OrderPosPaymentStatusEnum paymentStatus) {
        this.paymentStatus = paymentStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payments")
    public OrderPaymentsInput[] payments;
    public OrderInput withPayments(OrderPaymentsInput[] payments) {
        this.payments = payments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reference_id")
    public String referenceId;
    public OrderInput withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunded")
    public Boolean refunded;
    public OrderInput withRefunded(Boolean refunded) {
        this.refunded = refunded;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("refunds")
    public OrderRefundsInput[] refunds;
    public OrderInput withRefunds(OrderRefundsInput[] refunds) {
        this.refunds = refunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("seat")
    public String seat;
    public OrderInput withSeat(String seat) {
        this.seat = seat;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service_charges")
    public ServiceChargeInput[] serviceCharges;
    public OrderInput withServiceCharges(ServiceChargeInput[] serviceCharges) {
        this.serviceCharges = serviceCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OrderStatusEnum status;
    public OrderInput withStatus(OrderStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("table")
    public String table;
    public OrderInput withTable(String table) {
        this.table = table;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taxes")
    public Object[] taxes;
    public OrderInput withTaxes(Object[] taxes) {
        this.taxes = taxes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tenders")
    public OrderTendersInput[] tenders;
    public OrderInput withTenders(OrderTendersInput[] tenders) {
        this.tenders = tenders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public OrderInput withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_amount")
    public Long totalAmount;
    public OrderInput withTotalAmount(Long totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_discount")
    public Long totalDiscount;
    public OrderInput withTotalDiscount(Long totalDiscount) {
        this.totalDiscount = totalDiscount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_refund")
    public Long totalRefund;
    public OrderInput withTotalRefund(Long totalRefund) {
        this.totalRefund = totalRefund;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_service_charge")
    public Long totalServiceCharge;
    public OrderInput withTotalServiceCharge(Long totalServiceCharge) {
        this.totalServiceCharge = totalServiceCharge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tax")
    public Long totalTax;
    public OrderInput withTotalTax(Long totalTax) {
        this.totalTax = totalTax;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_tip")
    public Long totalTip;
    public OrderInput withTotalTip(Long totalTip) {
        this.totalTip = totalTip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public OrderInput withVersion(String version) {
        this.version = version;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voided")
    public Boolean voided;
    public OrderInput withVoided(Boolean voided) {
        this.voided = voided;
        return this;
    }
}