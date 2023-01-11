package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Device
 * Information about a device.
**/
public class Device {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public Device withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Device withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyncShadow")
    public Boolean syncShadow;
    public Device withSyncShadow(Boolean syncShadow) {
        this.syncShadow = syncShadow;
        return this;
    }
    @JsonProperty("ThingArn")
    public String thingArn;
    public Device withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
}