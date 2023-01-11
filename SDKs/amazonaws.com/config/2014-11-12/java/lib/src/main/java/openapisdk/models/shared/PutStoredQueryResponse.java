package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutStoredQueryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("QueryArn")
    public String queryArn;
    public PutStoredQueryResponse withQueryArn(String queryArn) {
        this.queryArn = queryArn;
        return this;
    }
}