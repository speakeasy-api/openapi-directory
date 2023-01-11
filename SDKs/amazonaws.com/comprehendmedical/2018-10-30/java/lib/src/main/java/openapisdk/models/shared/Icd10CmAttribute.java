package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Icd10CmAttribute
 * The detected attributes that relate to an entity. This includes an extracted segment of the text that is an attribute of an entity, or otherwise related to an entity. InferICD10CM detects the following attributes: <code>Direction</code>, <code>System, Organ or Site</code>, and <code>Acuity</code>.
**/
public class Icd10CmAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginOffset")
    public Long beginOffset;
    public Icd10CmAttribute withBeginOffset(Long beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Category")
    public Icd10CmEntityTypeEnum category;
    public Icd10CmAttribute withCategory(Icd10CmEntityTypeEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndOffset")
    public Long endOffset;
    public Icd10CmAttribute withEndOffset(Long endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Long id;
    public Icd10CmAttribute withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelationshipScore")
    public Float relationshipScore;
    public Icd10CmAttribute withRelationshipScore(Float relationshipScore) {
        this.relationshipScore = relationshipScore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RelationshipType")
    public Icd10CmRelationshipTypeEnum relationshipType;
    public Icd10CmAttribute withRelationshipType(Icd10CmRelationshipTypeEnum relationshipType) {
        this.relationshipType = relationshipType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public Icd10CmAttribute withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public Icd10CmAttribute withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Traits")
    public Icd10CmTrait[] traits;
    public Icd10CmAttribute withTraits(Icd10CmTrait[] traits) {
        this.traits = traits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public Icd10CmAttributeTypeEnum type;
    public Icd10CmAttribute withType(Icd10CmAttributeTypeEnum type) {
        this.type = type;
        return this;
    }
}