package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAccountDedicatedIpWarmupAttributesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoWarmupEnabled")
    public Boolean autoWarmupEnabled;
    public PutAccountDedicatedIpWarmupAttributesRequestBody withAutoWarmupEnabled(Boolean autoWarmupEnabled) {
        this.autoWarmupEnabled = autoWarmupEnabled;
        return this;
    }
}