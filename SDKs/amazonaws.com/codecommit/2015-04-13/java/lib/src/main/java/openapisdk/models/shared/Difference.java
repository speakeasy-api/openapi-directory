package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Difference
 * Returns information about a set of differences for a commit specifier.
**/
public class Difference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("afterBlob")
    public BlobMetadata afterBlob;
    public Difference withAfterBlob(BlobMetadata afterBlob) {
        this.afterBlob = afterBlob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beforeBlob")
    public BlobMetadata beforeBlob;
    public Difference withBeforeBlob(BlobMetadata beforeBlob) {
        this.beforeBlob = beforeBlob;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("changeType")
    public ChangeTypeEnumEnum changeType;
    public Difference withChangeType(ChangeTypeEnumEnum changeType) {
        this.changeType = changeType;
        return this;
    }
}