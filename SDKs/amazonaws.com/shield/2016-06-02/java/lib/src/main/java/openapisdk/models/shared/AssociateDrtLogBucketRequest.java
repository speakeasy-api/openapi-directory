package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateDrtLogBucketRequest {
    @JsonProperty("LogBucket")
    public String logBucket;
    public AssociateDrtLogBucketRequest withLogBucket(String logBucket) {
        this.logBucket = logBucket;
        return this;
    }
}