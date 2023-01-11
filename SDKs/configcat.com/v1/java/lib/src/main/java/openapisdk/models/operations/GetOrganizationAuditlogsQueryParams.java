package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetOrganizationAuditlogsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=auditLogType")
    public java.util.Map<String, Object> auditLogType;
    public GetOrganizationAuditlogsQueryParams withAuditLogType(java.util.Map<String, Object> auditLogType) {
        this.auditLogType = auditLogType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=configId")
    public String configId;
    public GetOrganizationAuditlogsQueryParams withConfigId(String configId) {
        this.configId = configId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=environmentId")
    public String environmentId;
    public GetOrganizationAuditlogsQueryParams withEnvironmentId(String environmentId) {
        this.environmentId = environmentId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromUtcDateTime")
    public OffsetDateTime fromUtcDateTime;
    public GetOrganizationAuditlogsQueryParams withFromUtcDateTime(OffsetDateTime fromUtcDateTime) {
        this.fromUtcDateTime = fromUtcDateTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=productId")
    public String productId;
    public GetOrganizationAuditlogsQueryParams withProductId(String productId) {
        this.productId = productId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=toUtcDateTime")
    public OffsetDateTime toUtcDateTime;
    public GetOrganizationAuditlogsQueryParams withToUtcDateTime(OffsetDateTime toUtcDateTime) {
        this.toUtcDateTime = toUtcDateTime;
        return this;
    }
}