package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class AuditLogItemModel {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actionTarget")
    public String actionTarget;
    public AuditLogItemModel withActionTarget(String actionTarget) {
        this.actionTarget = actionTarget;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("auditLogDateTime")
    public OffsetDateTime auditLogDateTime;
    public AuditLogItemModel withAuditLogDateTime(OffsetDateTime auditLogDateTime) {
        this.auditLogDateTime = auditLogDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditLogId")
    public Long auditLogId;
    public AuditLogItemModel withAuditLogId(Long auditLogId) {
        this.auditLogId = auditLogId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("auditLogType")
    public String auditLogType;
    public AuditLogItemModel withAuditLogType(String auditLogType) {
        this.auditLogType = auditLogType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("details")
    public String details;
    public AuditLogItemModel withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userEmail")
    public String userEmail;
    public AuditLogItemModel withUserEmail(String userEmail) {
        this.userEmail = userEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userName")
    public String userName;
    public AuditLogItemModel withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("where")
    public String where;
    public AuditLogItemModel withWhere(String where) {
        this.where = where;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("why")
    public String why;
    public AuditLogItemModel withWhy(String why) {
        this.why = why;
        return this;
    }
}