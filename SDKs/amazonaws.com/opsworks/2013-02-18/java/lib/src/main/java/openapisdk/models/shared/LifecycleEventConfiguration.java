package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LifecycleEventConfiguration
 * Specifies the lifecycle event configuration
**/
public class LifecycleEventConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Shutdown")
    public ShutdownEventConfiguration shutdown;
    public LifecycleEventConfiguration withShutdown(ShutdownEventConfiguration shutdown) {
        this.shutdown = shutdown;
        return this;
    }
}