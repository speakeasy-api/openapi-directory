package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServicesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FormatVersion")
    public String formatVersion;
    public DescribeServicesRequest withFormatVersion(String formatVersion) {
        this.formatVersion = formatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public DescribeServicesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeServicesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceCode")
    public String serviceCode;
    public DescribeServicesRequest withServiceCode(String serviceCode) {
        this.serviceCode = serviceCode;
        return this;
    }
}