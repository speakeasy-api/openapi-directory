package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileEvidence
 * This type is used to store the unique identifier of an evidence file. Evidence files are used by seller to contest a payment dispute.
**/
public class FileEvidence {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileId")
    public String fileId;
    public FileEvidence withFileId(String fileId) {
        this.fileId = fileId;
        return this;
    }
}