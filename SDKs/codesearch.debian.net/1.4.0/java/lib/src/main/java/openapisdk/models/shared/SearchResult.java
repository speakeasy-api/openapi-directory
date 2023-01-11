package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SearchResult
 * A search result matching the specified query. You can use sources.debian.org to view the file contents. See https://github.com/Debian/dcs/blob/master/cmd/dcs-web/show/show.go for how to construct a sources.debian.org URL from a search result.
**/
public class SearchResult {
    @JsonProperty("context")
    public String context;
    public SearchResult withContext(String context) {
        this.context = context;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context_after")
    public String[] contextAfter;
    public SearchResult withContextAfter(String[] contextAfter) {
        this.contextAfter = contextAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("context_before")
    public String[] contextBefore;
    public SearchResult withContextBefore(String[] contextBefore) {
        this.contextBefore = contextBefore;
        return this;
    }
    @JsonProperty("line")
    public Long line;
    public SearchResult withLine(Long line) {
        this.line = line;
        return this;
    }
    @JsonProperty("package")
    public String package_;
    public SearchResult withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
    @JsonProperty("path")
    public String path;
    public SearchResult withPath(String path) {
        this.path = path;
        return this;
    }
}