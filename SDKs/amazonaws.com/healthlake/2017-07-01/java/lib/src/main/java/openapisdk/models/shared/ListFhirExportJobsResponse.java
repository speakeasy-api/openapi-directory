package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFhirExportJobsResponse {
    @JsonProperty("ExportJobPropertiesList")
    public ExportJobProperties[] exportJobPropertiesList;
    public ListFhirExportJobsResponse withExportJobPropertiesList(ExportJobProperties[] exportJobPropertiesList) {
        this.exportJobPropertiesList = exportJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFhirExportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}