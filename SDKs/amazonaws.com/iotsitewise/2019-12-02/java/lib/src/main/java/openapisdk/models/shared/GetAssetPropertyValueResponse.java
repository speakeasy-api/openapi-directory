package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetAssetPropertyValueResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyValue")
    public AssetPropertyValue propertyValue;
    public GetAssetPropertyValueResponse withPropertyValue(AssetPropertyValue propertyValue) {
        this.propertyValue = propertyValue;
        return this;
    }
}