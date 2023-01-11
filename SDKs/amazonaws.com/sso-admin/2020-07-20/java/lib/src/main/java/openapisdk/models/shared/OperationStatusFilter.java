package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OperationStatusFilter
 * Filters he operation status list based on the passed attribute value.
**/
public class OperationStatusFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public StatusValuesEnum status;
    public OperationStatusFilter withStatus(StatusValuesEnum status) {
        this.status = status;
        return this;
    }
}