package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutQueryDefinitionRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logGroupNames")
    public String[] logGroupNames;
    public PutQueryDefinitionRequest withLogGroupNames(String[] logGroupNames) {
        this.logGroupNames = logGroupNames;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public PutQueryDefinitionRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queryDefinitionId")
    public String queryDefinitionId;
    public PutQueryDefinitionRequest withQueryDefinitionId(String queryDefinitionId) {
        this.queryDefinitionId = queryDefinitionId;
        return this;
    }
    @JsonProperty("queryString")
    public String queryString;
    public PutQueryDefinitionRequest withQueryString(String queryString) {
        this.queryString = queryString;
        return this;
    }
}