package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetAuditlogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auditLogType")
    public java.util.Map<String, Object> auditLogType;
    public GetAuditlogsQueryParams withAuditLogType(java.util.Map<String, Object> auditLogType) {
        this.auditLogType = auditLogType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=configId")
    public String configId;
    public GetAuditlogsQueryParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=environmentId")
    public String environmentId;
    public GetAuditlogsQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromUtcDateTime")
    public OffsetDateTime fromUtcDateTime;
    public GetAuditlogsQueryParams withFromUtcDateTime(OffsetDateTime fromUtcDateTime) {
        this.fromUtcDateTime = fromUtcDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toUtcDateTime")
    public OffsetDateTime toUtcDateTime;
    public GetAuditlogsQueryParams withToUtcDateTime(OffsetDateTime toUtcDateTime) {
        this.toUtcDateTime = toUtcDateTime;
        return this;
    }
}