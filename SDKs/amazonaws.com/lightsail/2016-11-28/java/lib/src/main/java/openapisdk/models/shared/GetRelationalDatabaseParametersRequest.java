package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetRelationalDatabaseParametersRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pageToken")
    public String pageToken;
    public GetRelationalDatabaseParametersRequest withPageToken(String pageToken) {
        this.pageToken = pageToken;
        return this;
    }
    @JsonProperty("relationalDatabaseName")
    public String relationalDatabaseName;
    public GetRelationalDatabaseParametersRequest withRelationalDatabaseName(String relationalDatabaseName) {
        this.relationalDatabaseName = relationalDatabaseName;
        return this;
    }
}