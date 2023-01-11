package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ClassificationInclusionAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification_id")
    public String classificationId;
    public ClassificationInclusionAttributes withClassificationId(String classificationId) {
        this.classificationId = classificationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classification_type")
    public ClassificationInclusionAttributesClassificationTypeEnum classificationType;
    public ClassificationInclusionAttributes withClassificationType(ClassificationInclusionAttributesClassificationTypeEnum classificationType) {
        this.classificationType = classificationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classified_id")
    public String classifiedId;
    public ClassificationInclusionAttributes withClassifiedId(String classifiedId) {
        this.classifiedId = classifiedId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("classified_type")
    public ClassificationInclusionAttributesClassifiedTypeEnum classifiedType;
    public ClassificationInclusionAttributes withClassifiedType(ClassificationInclusionAttributesClassifiedTypeEnum classifiedType) {
        this.classifiedType = classifiedType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ClassificationInclusionAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("position")
    public Long position;
    public ClassificationInclusionAttributes withPosition(Long position) {
        this.position = position;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public ClassificationInclusionAttributes withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ClassificationInclusionAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}