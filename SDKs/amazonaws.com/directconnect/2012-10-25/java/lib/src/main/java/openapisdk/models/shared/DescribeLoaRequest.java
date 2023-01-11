package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeLoaRequest {
    @JsonProperty("connectionId")
    public String connectionId;
    public DescribeLoaRequest withConnectionId(String connectionId) {
        this.connectionId = connectionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loaContentType")
    public LoaContentTypeEnum loaContentType;
    public DescribeLoaRequest withLoaContentType(LoaContentTypeEnum loaContentType) {
        this.loaContentType = loaContentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("providerName")
    public String providerName;
    public DescribeLoaRequest withProviderName(String providerName) {
        this.providerName = providerName;
        return this;
    }
}