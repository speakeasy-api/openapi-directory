package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class MapBeezUpColumnRequest {
    @JsonProperty("beezUPColumnName")
    public String beezUPColumnName;
    public MapBeezUpColumnRequest withBeezUpColumnName(String beezUPColumnName) {
        this.beezUPColumnName = beezUPColumnName;
        return this;
    }
}