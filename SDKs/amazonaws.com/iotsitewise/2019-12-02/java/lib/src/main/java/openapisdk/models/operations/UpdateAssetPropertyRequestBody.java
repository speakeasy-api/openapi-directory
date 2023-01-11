package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateAssetPropertyRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public UpdateAssetPropertyRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyAlias")
    public String propertyAlias;
    public UpdateAssetPropertyRequestBody withPropertyAlias(String propertyAlias) {
        this.propertyAlias = propertyAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propertyNotificationState")
    public UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum propertyNotificationState;
    public UpdateAssetPropertyRequestBody withPropertyNotificationState(UpdateAssetPropertyRequestBodyPropertyNotificationStateEnum propertyNotificationState) {
        this.propertyNotificationState = propertyNotificationState;
        return this;
    }
}