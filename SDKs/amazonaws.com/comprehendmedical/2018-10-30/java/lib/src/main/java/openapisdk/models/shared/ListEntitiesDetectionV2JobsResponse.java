package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListEntitiesDetectionV2JobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComprehendMedicalAsyncJobPropertiesList")
    public ComprehendMedicalAsyncJobProperties[] comprehendMedicalAsyncJobPropertiesList;
    public ListEntitiesDetectionV2JobsResponse withComprehendMedicalAsyncJobPropertiesList(ComprehendMedicalAsyncJobProperties[] comprehendMedicalAsyncJobPropertiesList) {
        this.comprehendMedicalAsyncJobPropertiesList = comprehendMedicalAsyncJobPropertiesList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListEntitiesDetectionV2JobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}