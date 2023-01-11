package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBucketResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bucket")
    public Bucket bucket;
    public CreateBucketResult withBucket(Bucket bucket) {
        this.bucket = bucket;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;
    public CreateBucketResult withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
}