package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ReposReplaceAllTopicsRequestBody {
    @JsonProperty("names")
    public String[] names;
    public ReposReplaceAllTopicsRequestBody withNames(String[] names) {
        this.names = names;
        return this;
    }
}