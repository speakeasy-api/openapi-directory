package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdatePortalRequestBodyPortalLogoImage
 * <p>Contains an image that is one of the following:</p> <ul> <li> <p>An image file. Choose this option to upload a new image.</p> </li> <li> <p>The ID of an existing image. Choose this option to keep an existing image.</p> </li> </ul>
**/
public class UpdatePortalRequestBodyPortalLogoImage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file")
    public openapisdk.models.shared.ImageFile file;
    public UpdatePortalRequestBodyPortalLogoImage withFile(openapisdk.models.shared.ImageFile file) {
        this.file = file;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public UpdatePortalRequestBodyPortalLogoImage withId(String id) {
        this.id = id;
        return this;
    }
}