package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiResponseSuccess {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cost")
    public Double cost;
    public ApiResponseSuccess withCost(Double cost) {
        this.cost = cost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mbIn")
    public Double mbIn;
    public ApiResponseSuccess withMbIn(Double mbIn) {
        this.mbIn = mbIn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mbOut")
    public Double mbOut;
    public ApiResponseSuccess withMbOut(Double mbOut) {
        this.mbOut = mbOut;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf")
    public String pdf;
    public ApiResponseSuccess withPdf(String pdf) {
        this.pdf = pdf;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success")
    public Boolean success;
    public ApiResponseSuccess withSuccess(Boolean success) {
        this.success = success;
        return this;
    }
}