package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PayoutInstrument
 * This type provides details about the seller's account that received (or is scheduled to receive) a payout.
**/
public class PayoutInstrument {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountLastFourDigits")
    public String accountLastFourDigits;
    public PayoutInstrument withAccountLastFourDigits(String accountLastFourDigits) {
        this.accountLastFourDigits = accountLastFourDigits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instrumentType")
    public String instrumentType;
    public PayoutInstrument withInstrumentType(String instrumentType) {
        this.instrumentType = instrumentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nickname")
    public String nickname;
    public PayoutInstrument withNickname(String nickname) {
        this.nickname = nickname;
        return this;
    }
}