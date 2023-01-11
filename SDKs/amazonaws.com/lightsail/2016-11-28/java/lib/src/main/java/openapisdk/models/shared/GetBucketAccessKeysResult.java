package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketAccessKeysResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accessKeys")
    public AccessKey[] accessKeys;
    public GetBucketAccessKeysResult withAccessKeys(AccessKey[] accessKeys) {
        this.accessKeys = accessKeys;
        return this;
    }
}