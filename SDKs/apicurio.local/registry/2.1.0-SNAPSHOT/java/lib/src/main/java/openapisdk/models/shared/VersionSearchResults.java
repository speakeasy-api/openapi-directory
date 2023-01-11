package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * VersionSearchResults
 * Describes the response received when searching for artifacts.
**/
public class VersionSearchResults {
    @JsonProperty("count")
    public Long count;
    public VersionSearchResults withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonProperty("versions")
    public SearchedVersion[] versions;
    public VersionSearchResults withVersions(SearchedVersion[] versions) {
        this.versions = versions;
        return this;
    }
}