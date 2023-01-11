package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ChangeLog
 *  The record of a change within Audit Manager, such as a modified assessment, a delegated control set, and so on. 
**/
public class ChangeLog {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("action")
    public ActionEnumEnum action;
    public ChangeLog withAction(ActionEnumEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public ChangeLog withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public ChangeLog withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectName")
    public String objectName;
    public ChangeLog withObjectName(String objectName) {
        this.objectName = objectName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("objectType")
    public ObjectTypeEnumEnum objectType;
    public ChangeLog withObjectType(ObjectTypeEnumEnum objectType) {
        this.objectType = objectType;
        return this;
    }
}