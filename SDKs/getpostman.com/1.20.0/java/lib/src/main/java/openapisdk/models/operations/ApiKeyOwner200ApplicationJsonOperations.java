package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ApiKeyOwner200ApplicationJsonOperations {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("limit")
    public Double limit;
    public ApiKeyOwner200ApplicationJsonOperations withLimit(Double limit) {
        this.limit = limit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ApiKeyOwner200ApplicationJsonOperations withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("overage")
    public Double overage;
    public ApiKeyOwner200ApplicationJsonOperations withOverage(Double overage) {
        this.overage = overage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("usage")
    public Double usage;
    public ApiKeyOwner200ApplicationJsonOperations withUsage(Double usage) {
        this.usage = usage;
        return this;
    }
}