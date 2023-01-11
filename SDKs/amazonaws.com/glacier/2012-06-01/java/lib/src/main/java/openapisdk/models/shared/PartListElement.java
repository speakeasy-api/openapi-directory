package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PartListElement
 * A list of the part sizes of the multipart upload.
**/
public class PartListElement {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RangeInBytes")
    public String rangeInBytes;
    public PartListElement withRangeInBytes(String rangeInBytes) {
        this.rangeInBytes = rangeInBytes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SHA256TreeHash")
    public String sha256TreeHash;
    public PartListElement withSha256TreeHash(String sha256TreeHash) {
        this.sha256TreeHash = sha256TreeHash;
        return this;
    }
}