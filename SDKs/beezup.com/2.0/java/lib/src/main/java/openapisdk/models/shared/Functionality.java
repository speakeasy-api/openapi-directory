package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Functionality {
    @JsonProperty("code")
    public String code;
    public Functionality withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonProperty("order")
    public Integer order;
    public Functionality withOrder(Integer order) {
        this.order = order;
        return this;
    }
}