package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateDrtLogBucketRequest {
    @JsonProperty("LogBucket")
    public String logBucket;
    public DisassociateDrtLogBucketRequest withLogBucket(String logBucket) {
        this.logBucket = logBucket;
        return this;
    }
}