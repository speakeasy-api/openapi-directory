package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * PortalResource
 * Identifies an IoT SiteWise Monitor portal.
**/
public class PortalResource {
    @JsonProperty("id")
    public String id;
    public PortalResource withId(String id) {
        this.id = id;
        return this;
    }
}