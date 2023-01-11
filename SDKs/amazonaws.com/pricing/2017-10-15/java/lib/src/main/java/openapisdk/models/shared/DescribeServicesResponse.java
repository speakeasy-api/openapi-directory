package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeServicesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FormatVersion")
    public String formatVersion;
    public DescribeServicesResponse withFormatVersion(String formatVersion) {
        this.formatVersion = formatVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public DescribeServicesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Services")
    public Service[] services;
    public DescribeServicesResponse withServices(Service[] services) {
        this.services = services;
        return this;
    }
}