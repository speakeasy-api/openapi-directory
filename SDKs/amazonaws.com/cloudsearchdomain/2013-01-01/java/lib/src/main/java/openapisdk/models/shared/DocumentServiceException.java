package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentServiceException
 * Information about any problems encountered while processing an upload request.
**/
public class DocumentServiceException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public DocumentServiceException withMessage(String message) {
        this.message = message;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public DocumentServiceException withStatus(String status) {
        this.status = status;
        return this;
    }
}