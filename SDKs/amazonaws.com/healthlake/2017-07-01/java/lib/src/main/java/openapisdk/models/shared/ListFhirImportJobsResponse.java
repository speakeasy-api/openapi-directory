package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListFhirImportJobsResponse {
    @JsonProperty("ImportJobPropertiesList")
    public ImportJobProperties[] importJobPropertiesList;
    public ListFhirImportJobsResponse withImportJobPropertiesList(ImportJobProperties[] importJobPropertiesList) {
        this.importJobPropertiesList = importJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListFhirImportJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}