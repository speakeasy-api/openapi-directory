package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WaitAndContinueSpecification
 * Specifies the prompts that Amazon Lex uses while a bot is waiting for customer input. 
**/
public class WaitAndContinueSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active")
    public Boolean active;
    public WaitAndContinueSpecification withActive(Boolean active) {
        this.active = active;
        return this;
    }
    @JsonProperty("continueResponse")
    public ResponseSpecification continueResponse;
    public WaitAndContinueSpecification withContinueResponse(ResponseSpecification continueResponse) {
        this.continueResponse = continueResponse;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stillWaitingResponse")
    public StillWaitingResponseSpecification stillWaitingResponse;
    public WaitAndContinueSpecification withStillWaitingResponse(StillWaitingResponseSpecification stillWaitingResponse) {
        this.stillWaitingResponse = stillWaitingResponse;
        return this;
    }
    @JsonProperty("waitingResponse")
    public ResponseSpecification waitingResponse;
    public WaitAndContinueSpecification withWaitingResponse(ResponseSpecification waitingResponse) {
        this.waitingResponse = waitingResponse;
        return this;
    }
}