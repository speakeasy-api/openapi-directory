package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourceDefinitionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Definitions")
    public DefinitionInformation[] definitions;
    public ListResourceDefinitionsResponse withDefinitions(DefinitionInformation[] definitions) {
        this.definitions = definitions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListResourceDefinitionsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}