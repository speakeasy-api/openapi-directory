package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class TrackedOrder {
    @JsonProperty("channel")
    public BeezUpCommonChannelBasicInfo channel;
    public TrackedOrder withChannel(BeezUpCommonChannelBasicInfo channel) {
        this.channel = channel;
        return this;
    }
    @JsonProperty("currencyCode")
    public String currencyCode;
    public TrackedOrder withCurrencyCode(String currencyCode) {
        this.currencyCode = currencyCode;
        return this;
    }
    @JsonProperty("merchantOrderId")
    public String merchantOrderId;
    public TrackedOrder withMerchantOrderId(String merchantOrderId) {
        this.merchantOrderId = merchantOrderId;
        return this;
    }
    @JsonProperty("paymentValidated")
    public Boolean paymentValidated;
    public TrackedOrder withPaymentValidated(Boolean paymentValidated) {
        this.paymentValidated = paymentValidated;
        return this;
    }
    @JsonProperty("products")
    public TrackedOrderProduct[] products;
    public TrackedOrder withProducts(TrackedOrderProduct[] products) {
        this.products = products;
        return this;
    }
    @JsonProperty("totalAmount")
    public Double totalAmount;
    public TrackedOrder withTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("utcDate")
    public OffsetDateTime utcDate;
    public TrackedOrder withUtcDate(OffsetDateTime utcDate) {
        this.utcDate = utcDate;
        return this;
    }
}