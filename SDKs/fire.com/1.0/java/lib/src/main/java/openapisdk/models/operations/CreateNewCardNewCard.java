package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateNewCardNewCard {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptFeesAndCharges")
    public Boolean acceptFeesAndCharges;
    public CreateNewCardNewCard withAcceptFeesAndCharges(Boolean acceptFeesAndCharges) {
        this.acceptFeesAndCharges = acceptFeesAndCharges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addressType")
    public CreateNewCardNewCardAddressTypeEnum addressType;
    public CreateNewCardNewCard withAddressType(CreateNewCardNewCardAddressTypeEnum addressType) {
        this.addressType = addressType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardPin")
    public String cardPin;
    public CreateNewCardNewCard withCardPin(String cardPin) {
        this.cardPin = cardPin;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eurIcan")
    public Long eurIcan;
    public CreateNewCardNewCard withEurIcan(Long eurIcan) {
        this.eurIcan = eurIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gbpIcan")
    public Long gbpIcan;
    public CreateNewCardNewCard withGbpIcan(Long gbpIcan) {
        this.gbpIcan = gbpIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userId")
    public Double userId;
    public CreateNewCardNewCard withUserId(Double userId) {
        this.userId = userId;
        return this;
    }
}