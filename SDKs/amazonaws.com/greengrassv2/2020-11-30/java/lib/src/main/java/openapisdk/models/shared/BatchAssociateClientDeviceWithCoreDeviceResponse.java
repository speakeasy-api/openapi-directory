package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateClientDeviceWithCoreDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorEntries")
    public AssociateClientDeviceWithCoreDeviceErrorEntry[] errorEntries;
    public BatchAssociateClientDeviceWithCoreDeviceResponse withErrorEntries(AssociateClientDeviceWithCoreDeviceErrorEntry[] errorEntries) {
        this.errorEntries = errorEntries;
        return this;
    }
}