package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreatePortalRequestBodyPortalLogoImageFile
 * Contains an image file.
**/
public class CreatePortalRequestBodyPortalLogoImageFile {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public String data;
    public CreatePortalRequestBodyPortalLogoImageFile withData(String data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public openapisdk.models.shared.ImageFileTypeEnum type;
    public CreatePortalRequestBodyPortalLogoImageFile withType(openapisdk.models.shared.ImageFileTypeEnum type) {
        this.type = type;
        return this;
    }
}