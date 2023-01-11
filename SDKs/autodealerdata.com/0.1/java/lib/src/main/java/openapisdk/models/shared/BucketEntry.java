package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BucketEntry {
    @JsonProperty("bucket")
    public Double bucket;
    public BucketEntry withBucket(Double bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonProperty("modelName")
    public String modelName;
    public BucketEntry withModelName(String modelName) {
        this.modelName = modelName;
        return this;
    }
    @JsonProperty("percentOfMarket")
    public Double percentOfMarket;
    public BucketEntry withPercentOfMarket(Double percentOfMarket) {
        this.percentOfMarket = percentOfMarket;
        return this;
    }
}