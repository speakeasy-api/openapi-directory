package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * NfsOnDeviceServiceConfiguration
 * An object that represents metadata and configuration settings for NFS service on an AWS Snow Family device.
**/
public class NfsOnDeviceServiceConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageLimit")
    public Long storageLimit;
    public NfsOnDeviceServiceConfiguration withStorageLimit(Long storageLimit) {
        this.storageLimit = storageLimit;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StorageUnit")
    public StorageUnitEnum storageUnit;
    public NfsOnDeviceServiceConfiguration withStorageUnit(StorageUnitEnum storageUnit) {
        this.storageUnit = storageUnit;
        return this;
    }
}