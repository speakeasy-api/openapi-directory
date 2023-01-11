package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendAlexaOfferToMasterResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Answer")
    public String answer;
    public SendAlexaOfferToMasterResponse withAnswer(String answer) {
        this.answer = answer;
        return this;
    }
}