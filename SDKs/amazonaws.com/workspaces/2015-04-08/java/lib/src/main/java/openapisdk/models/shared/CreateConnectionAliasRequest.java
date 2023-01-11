package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateConnectionAliasRequest {
    @JsonProperty("ConnectionString")
    public String connectionString;
    public CreateConnectionAliasRequest withConnectionString(String connectionString) {
        this.connectionString = connectionString;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateConnectionAliasRequest withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}