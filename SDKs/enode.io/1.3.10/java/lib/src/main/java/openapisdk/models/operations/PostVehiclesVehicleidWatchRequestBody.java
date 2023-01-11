package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PostVehiclesVehicleidWatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("properties")
    public PostVehiclesVehicleidWatchRequestBodyPropertiesEnum properties;
    public PostVehiclesVehicleidWatchRequestBody withProperties(PostVehiclesVehicleidWatchRequestBodyPropertiesEnum properties) {
        this.properties = properties;
        return this;
    }
}