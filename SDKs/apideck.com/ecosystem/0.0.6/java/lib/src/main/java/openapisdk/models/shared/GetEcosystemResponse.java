package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEcosystemResponse {
    @JsonProperty("data")
    public Ecosystem data;
    public GetEcosystemResponse withData(Ecosystem data) {
        this.data = data;
        return this;
    }
    @JsonProperty("status")
    public String status;
    public GetEcosystemResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonProperty("status_code")
    public Long statusCode;
    public GetEcosystemResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}