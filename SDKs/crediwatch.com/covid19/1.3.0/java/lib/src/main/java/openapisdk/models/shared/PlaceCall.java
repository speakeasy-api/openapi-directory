package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PlaceCall {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("answered_by")
    public String answeredBy;
    public PlaceCall withAnsweredBy(String answeredBy) {
        this.answeredBy = answeredBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public String error;
    public PlaceCall withError(String error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option_selected")
    public String optionSelected;
    public PlaceCall withOptionSelected(String optionSelected) {
        this.optionSelected = optionSelected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phone_number")
    public String phoneNumber;
    public PlaceCall withPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previously_verified_at")
    public String previouslyVerifiedAt;
    public PlaceCall withPreviouslyVerifiedAt(String previouslyVerifiedAt) {
        this.previouslyVerifiedAt = previouslyVerifiedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public String progress;
    public PlaceCall withProgress(String progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("token")
    public String token;
    public PlaceCall withToken(String token) {
        this.token = token;
        return this;
    }
}