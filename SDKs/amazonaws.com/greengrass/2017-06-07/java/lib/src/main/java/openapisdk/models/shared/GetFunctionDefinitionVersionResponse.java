package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetFunctionDefinitionVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Arn")
    public String arn;
    public GetFunctionDefinitionVersionResponse withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreationTimestamp")
    public String creationTimestamp;
    public GetFunctionDefinitionVersionResponse withCreationTimestamp(String creationTimestamp) {
        this.creationTimestamp = creationTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Definition")
    public FunctionDefinitionVersion definition;
    public GetFunctionDefinitionVersionResponse withDefinition(FunctionDefinitionVersion definition) {
        this.definition = definition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public GetFunctionDefinitionVersionResponse withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetFunctionDefinitionVersionResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public String version;
    public GetFunctionDefinitionVersionResponse withVersion(String version) {
        this.version = version;
        return this;
    }
}