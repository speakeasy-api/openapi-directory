package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConversationRate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("conversation_rate")
    public Float conversationRate;
    public ConversationRate withConversationRate(Float conversationRate) {
        this.conversationRate = conversationRate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("from_currency")
    public CurrencyEnum fromCurrency;
    public ConversationRate withFromCurrency(CurrencyEnum fromCurrency) {
        this.fromCurrency = fromCurrency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("to_currency")
    public CurrencyEnum toCurrency;
    public ConversationRate withToCurrency(CurrencyEnum toCurrency) {
        this.toCurrency = toCurrency;
        return this;
    }
}