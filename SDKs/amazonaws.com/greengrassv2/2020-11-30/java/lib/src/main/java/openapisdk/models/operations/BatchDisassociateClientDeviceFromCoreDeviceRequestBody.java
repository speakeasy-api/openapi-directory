package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchDisassociateClientDeviceFromCoreDeviceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public openapisdk.models.shared.DisassociateClientDeviceFromCoreDeviceEntry[] entries;
    public BatchDisassociateClientDeviceFromCoreDeviceRequestBody withEntries(openapisdk.models.shared.DisassociateClientDeviceFromCoreDeviceEntry[] entries) {
        this.entries = entries;
        return this;
    }
}