package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImagePermissions
 * Describes the permissions for an image. 
**/
public class ImagePermissions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowFleet")
    public Boolean allowFleet;
    public ImagePermissions withAllowFleet(Boolean allowFleet) {
        this.allowFleet = allowFleet;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("allowImageBuilder")
    public Boolean allowImageBuilder;
    public ImagePermissions withAllowImageBuilder(Boolean allowImageBuilder) {
        this.allowImageBuilder = allowImageBuilder;
        return this;
    }
}