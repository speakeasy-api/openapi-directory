package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attribute
 *  An extracted segment of the text that is an attribute of an entity, or otherwise related to an entity, such as the dosage of a medication taken. It contains information about the attribute such as id, begin and end offset within the input text, and the segment of the input text. 
**/
public class Attribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginOffset")
    public Long beginOffset;
    public Attribute withBeginOffset(Long beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Category")
    public EntityTypeEnum category;
    public Attribute withCategory(EntityTypeEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndOffset")
    public Long endOffset;
    public Attribute withEndOffset(Long endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Long id;
    public Attribute withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelationshipScore")
    public Float relationshipScore;
    public Attribute withRelationshipScore(Float relationshipScore) {
        this.relationshipScore = relationshipScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelationshipType")
    public RelationshipTypeEnum relationshipType;
    public Attribute withRelationshipType(RelationshipTypeEnum relationshipType) {
        this.relationshipType = relationshipType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public Attribute withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public Attribute withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Traits")
    public Trait[] traits;
    public Attribute withTraits(Trait[] traits) {
        this.traits = traits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public EntitySubTypeEnum type;
    public Attribute withType(EntitySubTypeEnum type) {
        this.type = type;
        return this;
    }
}