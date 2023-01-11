package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StoreAlertPropertyInfo {
    @JsonProperty("propertyId")
    public Integer propertyId;
    public StoreAlertPropertyInfo withPropertyId(Integer propertyId) {
        this.propertyId = propertyId;
        return this;
    }
    @JsonProperty("propertyName")
    public String propertyName;
    public StoreAlertPropertyInfo withPropertyName(String propertyName) {
        this.propertyName = propertyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyValidationExpression")
    public String propertyValidationExpression;
    public StoreAlertPropertyInfo withPropertyValidationExpression(String propertyValidationExpression) {
        this.propertyValidationExpression = propertyValidationExpression;
        return this;
    }
    @JsonProperty("propertyValue")
    public String propertyValue;
    public StoreAlertPropertyInfo withPropertyValue(String propertyValue) {
        this.propertyValue = propertyValue;
        return this;
    }
}