package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetDirectoryLimitsResult
 * Contains the results of the <a>GetDirectoryLimits</a> operation.
**/
public class GetDirectoryLimitsResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DirectoryLimits")
    public DirectoryLimits directoryLimits;
    public GetDirectoryLimitsResult withDirectoryLimits(DirectoryLimits directoryLimits) {
        this.directoryLimits = directoryLimits;
        return this;
    }
}