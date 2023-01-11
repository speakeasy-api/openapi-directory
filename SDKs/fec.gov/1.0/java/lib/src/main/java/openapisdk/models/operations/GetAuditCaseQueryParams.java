package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuditCaseQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetAuditCaseQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=audit_case_id")
    public String[] auditCaseId;
    public GetAuditCaseQueryParams withAuditCaseId(String[] auditCaseId) {
        this.auditCaseId = auditCaseId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=audit_id")
    public Integer[] auditId;
    public GetAuditCaseQueryParams withAuditId(Integer[] auditId) {
        this.auditId = auditId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=candidate_id")
    public String[] candidateId;
    public GetAuditCaseQueryParams withCandidateId(String[] candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_designation")
    public String committeeDesignation;
    public GetAuditCaseQueryParams withCommitteeDesignation(String committeeDesignation) {
        this.committeeDesignation = committeeDesignation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_id")
    public String[] committeeId;
    public GetAuditCaseQueryParams withCommitteeId(String[] committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=committee_type")
    public String[] committeeType;
    public GetAuditCaseQueryParams withCommitteeType(String[] committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cycle")
    public Integer[] cycle;
    public GetAuditCaseQueryParams withCycle(Integer[] cycle) {
        this.cycle = cycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max_election_cycle")
    public Integer maxElectionCycle;
    public GetAuditCaseQueryParams withMaxElectionCycle(Integer maxElectionCycle) {
        this.maxElectionCycle = maxElectionCycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=min_election_cycle")
    public Integer minElectionCycle;
    public GetAuditCaseQueryParams withMinElectionCycle(Integer minElectionCycle) {
        this.minElectionCycle = minElectionCycle;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Integer page;
    public GetAuditCaseQueryParams withPage(Integer page) {
        this.page = page;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=per_page")
    public Integer perPage;
    public GetAuditCaseQueryParams withPerPage(Integer perPage) {
        this.perPage = perPage;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=primary_category_id")
    public String primaryCategoryId;
    public GetAuditCaseQueryParams withPrimaryCategoryId(String primaryCategoryId) {
        this.primaryCategoryId = primaryCategoryId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String[] q;
    public GetAuditCaseQueryParams withQ(String[] q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=qq")
    public String[] qq;
    public GetAuditCaseQueryParams withQq(String[] qq) {
        this.qq = qq;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort")
    public String[] sort;
    public GetAuditCaseQueryParams withSort(String[] sort) {
        this.sort = sort;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_hide_null")
    public Boolean sortHideNull;
    public GetAuditCaseQueryParams withSortHideNull(Boolean sortHideNull) {
        this.sortHideNull = sortHideNull;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_null_only")
    public Boolean sortNullOnly;
    public GetAuditCaseQueryParams withSortNullOnly(Boolean sortNullOnly) {
        this.sortNullOnly = sortNullOnly;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_nulls_last")
    public Boolean sortNullsLast;
    public GetAuditCaseQueryParams withSortNullsLast(Boolean sortNullsLast) {
        this.sortNullsLast = sortNullsLast;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sub_category_id")
    public String subCategoryId;
    public GetAuditCaseQueryParams withSubCategoryId(String subCategoryId) {
        this.subCategoryId = subCategoryId;
        return this;
    }
}