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

public class ClassificationAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;

    public ClassificationAttributes withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    
    /**
     * Human readable representation of the classification
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("display_name")
    public String displayName;

    public ClassificationAttributes withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    
    /**
     * An object with more detailed information about the classification.
     * The possible members are different per type of classification.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public java.util.Map<String, Object> metadata;

    public ClassificationAttributes withMetadata(java.util.Map<String, Object> metadata) {
        this.metadata = metadata;
        return this;
    }
    
    /**
     * This will be replaced by the relationship `parent` in a future update.&lt;br/&gt;
     * For hierarchical classifications, this is the ID of the parent classification
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("parent_id")
    public String parentId;

    public ClassificationAttributes withParentId(String parentId) {
        this.parentId = parentId;
        return this;
    }
    
    /**
     * For hierarchical classifications this is the list of IDs reflecting the hierarchy starting
     * with the root level node.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tree_path")
    public String[] treePath;

    public ClassificationAttributes withTreePath(String[] treePath) {
        this.treePath = treePath;
        return this;
    }
    
    /**
     * The type of classification. The type of retrievable classifications depends on the privileges
     * of the credential being used.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ClassificationAttributesTypeEnum type;

    public ClassificationAttributes withType(ClassificationAttributesTypeEnum type) {
        this.type = type;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;

    public ClassificationAttributes withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    
    /**
     * The value the classification represents. The meaning of this attribute depends on the type of classification.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;

    public ClassificationAttributes withValue(String value) {
        this.value = value;
        return this;
    }
    
    /**
     * For hierarchical classifications this is a concatenated string of all the classification
     * values from the root to this classification using a `: ` as separator.
     * 
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value_path")
    public String valuePath;

    public ClassificationAttributes withValuePath(String valuePath) {
        this.valuePath = valuePath;
        return this;
    }
    
    public ClassificationAttributes(){}
}
