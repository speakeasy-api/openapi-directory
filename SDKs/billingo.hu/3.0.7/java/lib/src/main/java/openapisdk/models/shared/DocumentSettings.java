package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DocumentSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mediated_service")
    public Boolean mediatedService;
    public DocumentSettings withMediatedService(Boolean mediatedService) {
        this.mediatedService = mediatedService;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("online_payment")
    public OnlinePaymentEnum onlinePayment;
    public DocumentSettings withOnlinePayment(OnlinePaymentEnum onlinePayment) {
        this.onlinePayment = onlinePayment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("place_id")
    public Long placeId;
    public DocumentSettings withPlaceId(Long placeId) {
        this.placeId = placeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("round")
    public RoundEnum round;
    public DocumentSettings withRound(RoundEnum round) {
        this.round = round;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("without_financial_fulfillment")
    public Boolean withoutFinancialFulfillment;
    public DocumentSettings withWithoutFinancialFulfillment(Boolean withoutFinancialFulfillment) {
        this.withoutFinancialFulfillment = withoutFinancialFulfillment;
        return this;
    }
}