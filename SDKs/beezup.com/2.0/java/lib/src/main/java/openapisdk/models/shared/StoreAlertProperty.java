package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StoreAlertProperty {
    @JsonProperty("propertyId")
    public Integer propertyId;
    public StoreAlertProperty withPropertyId(Integer propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @JsonProperty("propertyValue")
    public String propertyValue;
    public StoreAlertProperty withPropertyValue(String propertyValue) {
        this.propertyValue = propertyValue;
        return this;
    }
}