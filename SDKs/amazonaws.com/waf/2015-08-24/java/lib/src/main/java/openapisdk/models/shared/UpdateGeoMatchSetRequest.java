package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateGeoMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public UpdateGeoMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("GeoMatchSetId")
    public String geoMatchSetId;
    public UpdateGeoMatchSetRequest withGeoMatchSetId(String geoMatchSetId) {
        this.geoMatchSetId = geoMatchSetId;
        return this;
    }
    @JsonProperty("Updates")
    public GeoMatchSetUpdate[] updates;
    public UpdateGeoMatchSetRequest withUpdates(GeoMatchSetUpdate[] updates) {
        this.updates = updates;
        return this;
    }
}