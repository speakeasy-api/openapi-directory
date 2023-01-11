package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StoredQueryMetadata
 * Returns details of a specific query. 
**/
public class StoredQueryMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public StoredQueryMetadata withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("QueryArn")
    public String queryArn;
    public StoredQueryMetadata withQueryArn(String queryArn) {
        this.queryArn = queryArn;
        return this;
    }
    @JsonProperty("QueryId")
    public String queryId;
    public StoredQueryMetadata withQueryId(String queryId) {
        this.queryId = queryId;
        return this;
    }
    @JsonProperty("QueryName")
    public String queryName;
    public StoredQueryMetadata withQueryName(String queryName) {
        this.queryName = queryName;
        return this;
    }
}