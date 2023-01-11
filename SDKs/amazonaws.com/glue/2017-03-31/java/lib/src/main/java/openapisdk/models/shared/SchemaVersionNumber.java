package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaVersionNumber
 * A structure containing the schema version information.
**/
public class SchemaVersionNumber {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestVersion")
    public Boolean latestVersion;
    public SchemaVersionNumber withLatestVersion(Boolean latestVersion) {
        this.latestVersion = latestVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionNumber")
    public Long versionNumber;
    public SchemaVersionNumber withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}