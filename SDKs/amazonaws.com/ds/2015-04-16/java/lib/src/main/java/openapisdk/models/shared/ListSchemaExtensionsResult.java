package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListSchemaExtensionsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListSchemaExtensionsResult withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaExtensionsInfo")
    public SchemaExtensionInfo[] schemaExtensionsInfo;
    public ListSchemaExtensionsResult withSchemaExtensionsInfo(SchemaExtensionInfo[] schemaExtensionsInfo) {
        this.schemaExtensionsInfo = schemaExtensionsInfo;
        return this;
    }
}