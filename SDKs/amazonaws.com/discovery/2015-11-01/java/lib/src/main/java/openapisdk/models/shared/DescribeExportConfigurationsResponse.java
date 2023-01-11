package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeExportConfigurationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportsInfo")
    public ExportInfo[] exportsInfo;
    public DescribeExportConfigurationsResponse withExportsInfo(ExportInfo[] exportsInfo) {
        this.exportsInfo = exportsInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public DescribeExportConfigurationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}