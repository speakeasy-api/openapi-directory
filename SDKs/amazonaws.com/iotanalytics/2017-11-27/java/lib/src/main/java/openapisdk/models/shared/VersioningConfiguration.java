package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * VersioningConfiguration
 * Information about the versioning of dataset contents.
**/
public class VersioningConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxVersions")
    public Long maxVersions;
    public VersioningConfiguration withMaxVersions(Long maxVersions) {
        this.maxVersions = maxVersions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("unlimited")
    public Boolean unlimited;
    public VersioningConfiguration withUnlimited(Boolean unlimited) {
        this.unlimited = unlimited;
        return this;
    }
}