package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPublishedSchemaArnsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPublishedSchemaArnsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArns")
    public String[] schemaArns;
    public ListPublishedSchemaArnsResponse withSchemaArns(String[] schemaArns) {
        this.schemaArns = schemaArns;
        return this;
    }
}