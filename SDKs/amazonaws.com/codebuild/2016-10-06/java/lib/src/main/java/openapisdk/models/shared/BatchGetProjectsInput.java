package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class BatchGetProjectsInput {
    @JsonProperty("names")
    public String[] names;
    public BatchGetProjectsInput withNames(String[] names) {
        this.names = names;
        return this;
    }
}