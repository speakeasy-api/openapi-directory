package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrackedExternalOrder {
    @JsonProperty("currencyCode")
    public String currencyCode;
    public TrackedExternalOrder withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public TrackedExternalOrder withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("paymentValidated")
    public Boolean paymentValidated;
    public TrackedExternalOrder withPaymentValidated(Boolean paymentValidated) {
        this.paymentValidated = paymentValidated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("products")
    public TrackedExternalOrderProduct[] products;
    public TrackedExternalOrder withProducts(TrackedExternalOrderProduct[] products) {
        this.products = products;
        return this;
    }
    @JsonProperty("totalAmount")
    public Double totalAmount;
    public TrackedExternalOrder withTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("utcDate")
    public OffsetDateTime utcDate;
    public TrackedExternalOrder withUtcDate(OffsetDateTime utcDate) {
        this.utcDate = utcDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("visitorId")
    public String visitorId;
    public TrackedExternalOrder withVisitorId(String visitorId) {
        this.visitorId = visitorId;
        return this;
    }
}