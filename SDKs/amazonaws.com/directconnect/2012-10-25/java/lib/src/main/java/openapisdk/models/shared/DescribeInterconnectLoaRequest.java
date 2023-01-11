package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeInterconnectLoaRequest {
    @JsonProperty("interconnectId")
    public String interconnectId;
    public DescribeInterconnectLoaRequest withInterconnectId(String interconnectId) {
        this.interconnectId = interconnectId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loaContentType")
    public LoaContentTypeEnum loaContentType;
    public DescribeInterconnectLoaRequest withLoaContentType(LoaContentTypeEnum loaContentType) {
        this.loaContentType = loaContentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public DescribeInterconnectLoaRequest withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
}