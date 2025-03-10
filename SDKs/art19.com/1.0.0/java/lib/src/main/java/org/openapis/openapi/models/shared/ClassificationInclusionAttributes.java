/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import java.time.OffsetDateTime;
import org.openapis.openapi.utils.DateTimeDeserializer;
import org.openapis.openapi.utils.DateTimeSerializer;

public class ClassificationInclusionAttributes {
    /**
     * This will be replaced by the relationship `classification` in a future update.&lt;br/&gt;
     * The ID of the classification linked to the entity
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification_id")
    public String classificationId;

    public ClassificationInclusionAttributes withClassificationId(String classificationId) {
        this.classificationId = classificationId;
        return this;
    }
    
    /**
     * This will be replaced by the relationship `classification` in a future update.&lt;br/&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification_type")
    public ClassificationInclusionAttributesClassificationTypeEnum classificationType;

    public ClassificationInclusionAttributes withClassificationType(ClassificationInclusionAttributesClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    
    /**
     * This will be replaced by the relationship `classified` in a future update.&lt;br/&gt;
     * The ID of the entity linked to the classification
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classified_id")
    public String classifiedId;

    public ClassificationInclusionAttributes withClassifiedId(String classifiedId) {
        this.classifiedId = classifiedId;
        return this;
    }
    
    /**
     * This will be replaced by the relationship `classified` in a future update.&lt;br/&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classified_type")
    public ClassificationInclusionAttributesClassifiedTypeEnum classifiedType;

    public ClassificationInclusionAttributes withClassifiedType(ClassificationInclusionAttributesClassifiedTypeEnum classifiedType) {
        this.classifiedType = classifiedType;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public ClassificationInclusionAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * The position or order of the linked classification within the classified resource
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;

    public ClassificationInclusionAttributes withPosition(Long position) {
        this.position = position;
        return this;
    }
    
    /**
     * When `true` it describes the best classification of a specific type for a given
     * classified item
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;

    public ClassificationInclusionAttributes withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public ClassificationInclusionAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    public ClassificationInclusionAttributes(){}
}
