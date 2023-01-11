package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateLunaClientRequest
 * Contains the inputs for the <a>CreateLunaClient</a> action.
**/
public class CreateLunaClientRequest {
    @JsonProperty("Certificate")
    public String certificate;
    public CreateLunaClientRequest withCertificate(String certificate) {
        this.certificate = certificate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Label")
    public String label;
    public CreateLunaClientRequest withLabel(String label) {
        this.label = label;
        return this;
    }
}