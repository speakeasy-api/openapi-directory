package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OfferFunctionality {
    @JsonProperty("functionalityCode")
    public String functionalityCode;
    public OfferFunctionality withFunctionalityCode(String functionalityCode) {
        this.functionalityCode = functionalityCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxValueInteger")
    public Integer maxValueInteger;
    public OfferFunctionality withMaxValueInteger(Integer maxValueInteger) {
        this.maxValueInteger = maxValueInteger;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("text")
    public String text;
    public OfferFunctionality withText(String text) {
        this.text = text;
        return this;
    }
    @JsonProperty("unlimited")
    public Boolean unlimited;
    public OfferFunctionality withUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
        return this;
    }
}