package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Entity
 * <p>Provides information about an entity. </p> <p> </p>
**/
public class Entity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginOffset")
    public Long beginOffset;
    public Entity withBeginOffset(Long beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndOffset")
    public Long endOffset;
    public Entity withEndOffset(Long endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public Entity withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public Entity withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public EntityTypeEnum type;
    public Entity withType(EntityTypeEnum type) {
        this.type = type;
        return this;
    }
}