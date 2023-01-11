package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketBundlesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bundles")
    public BucketBundle[] bundles;
    public GetBucketBundlesResult withBundles(BucketBundle[] bundles) {
        this.bundles = bundles;
        return this;
    }
}