package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDisassociateClientDeviceFromCoreDeviceResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("errorEntries")
    public DisassociateClientDeviceFromCoreDeviceErrorEntry[] errorEntries;
    public BatchDisassociateClientDeviceFromCoreDeviceResponse withErrorEntries(DisassociateClientDeviceFromCoreDeviceErrorEntry[] errorEntries) {
        this.errorEntries = errorEntries;
        return this;
    }
}