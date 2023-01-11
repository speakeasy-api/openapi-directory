package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class SicerRequestBodyCertificateParameters {
    @JsonProperty("_name")
    public String name;
    public SicerRequestBodyCertificateParameters withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("consumer_id")
    public String consumerId;
    public SicerRequestBodyCertificateParameters withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
}