package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTerminologiesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTerminologiesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyPropertiesList")
    public TerminologyProperties[] terminologyPropertiesList;
    public ListTerminologiesResponse withTerminologyPropertiesList(TerminologyProperties[] terminologyPropertiesList) {
        this.terminologyPropertiesList = terminologyPropertiesList;
        return this;
    }
}