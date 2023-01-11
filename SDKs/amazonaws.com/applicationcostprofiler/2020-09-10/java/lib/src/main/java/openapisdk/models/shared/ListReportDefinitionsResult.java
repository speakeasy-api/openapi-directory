package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListReportDefinitionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListReportDefinitionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportDefinitions")
    public ReportDefinition[] reportDefinitions;
    public ListReportDefinitionsResult withReportDefinitions(ReportDefinition[] reportDefinitions) {
        this.reportDefinitions = reportDefinitions;
        return this;
    }
}