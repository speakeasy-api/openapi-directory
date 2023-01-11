package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AuditLogGetAuditLogQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=after")
    public String after;
    public AuditLogGetAuditLogQueryParams withAfter(String after) {
        this.after = after;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=before")
    public String before;
    public AuditLogGetAuditLogQueryParams withBefore(String before) {
        this.before = before;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public openapisdk.models.shared.AuditLogIncludeEnum include;
    public AuditLogGetAuditLogQueryParams withInclude(openapisdk.models.shared.AuditLogIncludeEnum include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=order")
    public openapisdk.models.shared.AuditLogOrderEnum order;
    public AuditLogGetAuditLogQueryParams withOrder(openapisdk.models.shared.AuditLogOrderEnum order) {
        this.order = order;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Long page;
    public AuditLogGetAuditLogQueryParams withPage(Long page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Long perPage;
    public AuditLogGetAuditLogQueryParams withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=phrase")
    public String phrase;
    public AuditLogGetAuditLogQueryParams withPhrase(String phrase) {
        this.phrase = phrase;
        return this;
    }
}