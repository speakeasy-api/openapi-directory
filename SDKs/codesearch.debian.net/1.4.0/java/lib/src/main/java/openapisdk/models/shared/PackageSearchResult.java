package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class PackageSearchResult {
    @JsonProperty("package")
    public String package_;
    public PackageSearchResult withPackage(String package_) {
        this.package_ = package_;
        return this;
    }
    @JsonProperty("results")
    public SearchResult[] results;
    public PackageSearchResult withResults(SearchResult[] results) {
        this.results = results;
        return this;
    }
}