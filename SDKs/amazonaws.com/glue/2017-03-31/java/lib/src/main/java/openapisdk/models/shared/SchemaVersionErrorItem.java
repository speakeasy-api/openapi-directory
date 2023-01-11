package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SchemaVersionErrorItem
 * An object that contains the error details for an operation on a schema version.
**/
public class SchemaVersionErrorItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorDetails")
    public ErrorDetails errorDetails;
    public SchemaVersionErrorItem withErrorDetails(ErrorDetails errorDetails) {
        this.errorDetails = errorDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionNumber")
    public Long versionNumber;
    public SchemaVersionErrorItem withVersionNumber(Long versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}