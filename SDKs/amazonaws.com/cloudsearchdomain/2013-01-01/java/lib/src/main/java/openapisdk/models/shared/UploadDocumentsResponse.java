package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UploadDocumentsResponse
 * Contains the response to an <code>UploadDocuments</code> request.
**/
public class UploadDocumentsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adds")
    public Long adds;
    public UploadDocumentsResponse withAdds(Long adds) {
        this.adds = adds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deletes")
    public Long deletes;
    public UploadDocumentsResponse withDeletes(Long deletes) {
        this.deletes = deletes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public UploadDocumentsResponse withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("warnings")
    public DocumentServiceWarning[] warnings;
    public UploadDocumentsResponse withWarnings(DocumentServiceWarning[] warnings) {
        this.warnings = warnings;
        return this;
    }
}