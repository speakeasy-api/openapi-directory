package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SampleChannelDataResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloads")
    public String[] payloads;
    public SampleChannelDataResponse withPayloads(String[] payloads) {
        this.payloads = payloads;
        return this;
    }
}