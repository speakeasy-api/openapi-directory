package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Core
 * Information about a core.
**/
public class Core {
    @JsonProperty("CertificateArn")
    public String certificateArn;
    public Core withCertificateArn(String certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Core withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyncShadow")
    public Boolean syncShadow;
    public Core withSyncShadow(Boolean syncShadow) {
        this.syncShadow = syncShadow;
        return this;
    }
    @JsonProperty("ThingArn")
    public String thingArn;
    public Core withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
}