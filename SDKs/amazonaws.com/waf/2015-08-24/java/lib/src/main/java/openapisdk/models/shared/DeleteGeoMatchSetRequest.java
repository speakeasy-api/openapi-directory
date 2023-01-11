package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGeoMatchSetRequest {
    @JsonProperty("ChangeToken")
    public String changeToken;
    public DeleteGeoMatchSetRequest withChangeToken(String changeToken) {
        this.changeToken = changeToken;
        return this;
    }
    @JsonProperty("GeoMatchSetId")
    public String geoMatchSetId;
    public DeleteGeoMatchSetRequest withGeoMatchSetId(String geoMatchSetId) {
        this.geoMatchSetId = geoMatchSetId;
        return this;
    }
}