package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBucketAccessKeyResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKey")
    public AccessKey accessKey;
    public CreateBucketAccessKeyResult withAccessKey(AccessKey accessKey) {
        this.accessKey = accessKey;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operations")
    public Operation[] operations;
    public CreateBucketAccessKeyResult withOperations(Operation[] operations) {
        this.operations = operations;
        return this;
    }
}