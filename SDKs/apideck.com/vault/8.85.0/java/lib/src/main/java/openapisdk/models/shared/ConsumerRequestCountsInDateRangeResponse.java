package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ConsumerRequestCountsInDateRangeResponse {
    @JsonProperty("data")
    public ConsumerRequestCountsInDateRangeResponseData data;
    public ConsumerRequestCountsInDateRangeResponse withData(ConsumerRequestCountsInDateRangeResponseData data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public ConsumerRequestCountsInDateRangeResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public ConsumerRequestCountsInDateRangeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}