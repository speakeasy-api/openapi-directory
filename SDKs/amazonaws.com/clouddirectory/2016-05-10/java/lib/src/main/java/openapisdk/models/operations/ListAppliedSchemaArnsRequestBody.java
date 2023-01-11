package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListAppliedSchemaArnsRequestBody {
    @JsonProperty("DirectoryArn")
    public String directoryArn;
    public ListAppliedSchemaArnsRequestBody withDirectoryArn(String directoryArn) {
        this.directoryArn = directoryArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListAppliedSchemaArnsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListAppliedSchemaArnsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaArn")
    public String schemaArn;
    public ListAppliedSchemaArnsRequestBody withSchemaArn(String schemaArn) {
        this.schemaArn = schemaArn;
        return this;
    }
}