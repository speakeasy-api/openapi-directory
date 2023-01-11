package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PutDedicatedIpWarmupAttributesRequestBody {
    @JsonProperty("WarmupPercentage")
    public Long warmupPercentage;
    public PutDedicatedIpWarmupAttributesRequestBody withWarmupPercentage(Long warmupPercentage) {
        this.warmupPercentage = warmupPercentage;
        return this;
    }
}