package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ImportAlreadyInProgressResponse {
    @JsonProperty("errors")
    public BeezUpCommonUserErrorMessage[] errors;
    public ImportAlreadyInProgressResponse withErrors(BeezUpCommonUserErrorMessage[] errors) {
        this.errors = errors;
        return this;
    }
    @JsonProperty("links")
    public ImportAlreadyInProgressResponseLinks links;
    public ImportAlreadyInProgressResponse withLinks(ImportAlreadyInProgressResponseLinks links) {
        this.links = links;
        return this;
    }
}