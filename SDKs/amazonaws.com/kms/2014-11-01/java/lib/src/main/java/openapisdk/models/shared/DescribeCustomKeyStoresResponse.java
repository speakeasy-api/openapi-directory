package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCustomKeyStoresResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStores")
    public CustomKeyStoresListEntry[] customKeyStores;
    public DescribeCustomKeyStoresResponse withCustomKeyStores(CustomKeyStoresListEntry[] customKeyStores) {
        this.customKeyStores = customKeyStores;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextMarker")
    public String nextMarker;
    public DescribeCustomKeyStoresResponse withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Truncated")
    public Boolean truncated;
    public DescribeCustomKeyStoresResponse withTruncated(Boolean truncated) {
        this.truncated = truncated;
        return this;
    }
}