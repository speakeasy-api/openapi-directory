package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentServiceWarning
 * A warning returned by the document service when an issue is discovered while processing an upload request.
**/
public class DocumentServiceWarning {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DocumentServiceWarning withMessage(String message) {
        this.message = message;
        return this;
    }
}