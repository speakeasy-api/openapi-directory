package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PaymentHistory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversion_rate")
    public Float conversionRate;
    public PaymentHistory withConversionRate(Float conversionRate) {
        this.conversionRate = conversionRate;
        return this;
    }
    @JsonProperty("date")
    public LocalDate date;
    public PaymentHistory withDate(LocalDate date) {
        this.date = date;
        return this;
    }
    @JsonProperty("payment_method")
    public PaymentMethodEnum paymentMethod;
    public PaymentHistory withPaymentMethod(PaymentMethodEnum paymentMethod) {
        this.paymentMethod = paymentMethod;
        return this;
    }
    @JsonProperty("price")
    public Float price;
    public PaymentHistory withPrice(Float price) {
        this.price = price;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("voucher_number")
    public String voucherNumber;
    public PaymentHistory withVoucherNumber(String voucherNumber) {
        this.voucherNumber = voucherNumber;
        return this;
    }
}