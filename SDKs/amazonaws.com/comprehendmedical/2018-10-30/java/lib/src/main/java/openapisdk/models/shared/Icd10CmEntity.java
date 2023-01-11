package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Icd10CmEntity
 * The collection of medical entities extracted from the input text and their associated information. For each entity, the response provides the entity text, the entity category, where the entity text begins and ends, and the level of confidence that Amazon Comprehend Medical has in the detection and analysis. Attributes and traits of the entity are also returned. 
**/
public class Icd10CmEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public Icd10CmAttribute[] attributes;
    public Icd10CmEntity withAttributes(Icd10CmAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BeginOffset")
    public Long beginOffset;
    public Icd10CmEntity withBeginOffset(Long beginOffset) {
        this.beginOffset = beginOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Category")
    public Icd10CmEntityCategoryEnum category;
    public Icd10CmEntity withCategory(Icd10CmEntityCategoryEnum category) {
        this.category = category;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndOffset")
    public Long endOffset;
    public Icd10CmEntity withEndOffset(Long endOffset) {
        this.endOffset = endOffset;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ICD10CMConcepts")
    public Icd10CmConcept[] icd10CMConcepts;
    public Icd10CmEntity withIcd10CmConcepts(Icd10CmConcept[] icd10CMConcepts) {
        this.icd10CMConcepts = icd10CMConcepts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public Long id;
    public Icd10CmEntity withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Score")
    public Float score;
    public Icd10CmEntity withScore(Float score) {
        this.score = score;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Text")
    public String text;
    public Icd10CmEntity withText(String text) {
        this.text = text;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Traits")
    public Icd10CmTrait[] traits;
    public Icd10CmEntity withTraits(Icd10CmTrait[] traits) {
        this.traits = traits;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public Icd10CmEntityTypeEnum type;
    public Icd10CmEntity withType(Icd10CmEntityTypeEnum type) {
        this.type = type;
        return this;
    }
}