package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetBucketBundlesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("includeInactive")
    public Boolean includeInactive;
    public GetBucketBundlesRequest withIncludeInactive(Boolean includeInactive) {
        this.includeInactive = includeInactive;
        return this;
    }
}