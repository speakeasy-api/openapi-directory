package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PiiEntity
 * Provides information about a PII entity.
**/
public class PiiEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginOffset")
    public Long beginOffset;
    public PiiEntity withBeginOffset(Long beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndOffset")
    public Long endOffset;
    public PiiEntity withEndOffset(Long endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public PiiEntity withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public PiiEntityTypeEnum type;
    public PiiEntity withType(PiiEntityTypeEnum type) {
        this.type = type;
        return this;
    }
}