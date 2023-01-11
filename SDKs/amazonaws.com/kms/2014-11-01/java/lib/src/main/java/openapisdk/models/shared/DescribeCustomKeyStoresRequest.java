package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeCustomKeyStoresRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreId")
    public String customKeyStoreId;
    public DescribeCustomKeyStoresRequest withCustomKeyStoreId(String customKeyStoreId) {
        this.customKeyStoreId = customKeyStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomKeyStoreName")
    public String customKeyStoreName;
    public DescribeCustomKeyStoresRequest withCustomKeyStoreName(String customKeyStoreName) {
        this.customKeyStoreName = customKeyStoreName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Limit")
    public Long limit;
    public DescribeCustomKeyStoresRequest withLimit(Long limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marker")
    public String marker;
    public DescribeCustomKeyStoresRequest withMarker(String marker) {
        this.marker = marker;
        return this;
    }
}