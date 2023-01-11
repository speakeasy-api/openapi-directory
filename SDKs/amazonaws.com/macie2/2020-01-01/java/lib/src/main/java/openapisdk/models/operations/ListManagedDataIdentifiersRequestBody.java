package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListManagedDataIdentifiersRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListManagedDataIdentifiersRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}