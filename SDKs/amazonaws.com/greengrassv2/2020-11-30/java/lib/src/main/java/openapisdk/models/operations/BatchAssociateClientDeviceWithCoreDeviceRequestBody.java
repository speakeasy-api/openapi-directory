package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchAssociateClientDeviceWithCoreDeviceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("entries")
    public openapisdk.models.shared.AssociateClientDeviceWithCoreDeviceEntry[] entries;
    public BatchAssociateClientDeviceWithCoreDeviceRequestBody withEntries(openapisdk.models.shared.AssociateClientDeviceWithCoreDeviceEntry[] entries) {
        this.entries = entries;
        return this;
    }
}