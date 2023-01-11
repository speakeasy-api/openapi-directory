package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BatchPermissionsFailureEntry
 * A list of failures when performing a batch grant or batch revoke operation.
**/
public class BatchPermissionsFailureEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public ErrorDetail error;
    public BatchPermissionsFailureEntry withError(ErrorDetail error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RequestEntry")
    public BatchPermissionsRequestEntry requestEntry;
    public BatchPermissionsFailureEntry withRequestEntry(BatchPermissionsRequestEntry requestEntry) {
        this.requestEntry = requestEntry;
        return this;
    }
}