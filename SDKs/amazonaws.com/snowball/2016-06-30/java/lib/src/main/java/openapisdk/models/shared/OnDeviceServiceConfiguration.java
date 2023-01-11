package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * OnDeviceServiceConfiguration
 * An object that represents metadata and configuration settings for services on an AWS Snow Family device.
**/
public class OnDeviceServiceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NFSOnDeviceService")
    public NfsOnDeviceServiceConfiguration nfsOnDeviceService;
    public OnDeviceServiceConfiguration withNfsOnDeviceService(NfsOnDeviceServiceConfiguration nfsOnDeviceService) {
        this.nfsOnDeviceService = nfsOnDeviceService;
        return this;
    }
}