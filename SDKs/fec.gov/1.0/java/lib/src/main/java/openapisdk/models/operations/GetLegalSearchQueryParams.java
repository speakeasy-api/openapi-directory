package openapisdk.models.operations;

import java.time.LocalDate;
import openapisdk.utils.SpeakeasyMetadata;

public class GetLegalSearchQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_committee_id")
    public String afCommitteeId;
    public GetLegalSearchQueryParams withAfCommitteeId(String afCommitteeId) {
        this.afCommitteeId = afCommitteeId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_fd_fine_amount")
    public Integer afFdFineAmount;
    public GetLegalSearchQueryParams withAfFdFineAmount(Integer afFdFineAmount) {
        this.afFdFineAmount = afFdFineAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_max_fd_date")
    public LocalDate afMaxFdDate;
    public GetLegalSearchQueryParams withAfMaxFdDate(LocalDate afMaxFdDate) {
        this.afMaxFdDate = afMaxFdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_max_rtb_date")
    public LocalDate afMaxRtbDate;
    public GetLegalSearchQueryParams withAfMaxRtbDate(LocalDate afMaxRtbDate) {
        this.afMaxRtbDate = afMaxRtbDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_min_fd_date")
    public LocalDate afMinFdDate;
    public GetLegalSearchQueryParams withAfMinFdDate(LocalDate afMinFdDate) {
        this.afMinFdDate = afMinFdDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_min_rtb_date")
    public LocalDate afMinRtbDate;
    public GetLegalSearchQueryParams withAfMinRtbDate(LocalDate afMinRtbDate) {
        this.afMinRtbDate = afMinRtbDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_name")
    public String[] afName;
    public GetLegalSearchQueryParams withAfName(String[] afName) {
        this.afName = afName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_report_year")
    public String afReportYear;
    public GetLegalSearchQueryParams withAfReportYear(String afReportYear) {
        this.afReportYear = afReportYear;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=af_rtb_fine_amount")
    public Integer afRtbFineAmount;
    public GetLegalSearchQueryParams withAfRtbFineAmount(Integer afRtbFineAmount) {
        this.afRtbFineAmount = afRtbFineAmount;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_category")
    public GetLegalSearchAoCategoryEnum[] aoCategory;
    public GetLegalSearchQueryParams withAoCategory(GetLegalSearchAoCategoryEnum[] aoCategory) {
        this.aoCategory = aoCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_citation_require_all")
    public Boolean aoCitationRequireAll;
    public GetLegalSearchQueryParams withAoCitationRequireAll(Boolean aoCitationRequireAll) {
        this.aoCitationRequireAll = aoCitationRequireAll;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_entity_name")
    public String[] aoEntityName;
    public GetLegalSearchQueryParams withAoEntityName(String[] aoEntityName) {
        this.aoEntityName = aoEntityName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_is_pending")
    public Boolean aoIsPending;
    public GetLegalSearchQueryParams withAoIsPending(Boolean aoIsPending) {
        this.aoIsPending = aoIsPending;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_max_issue_date")
    public LocalDate aoMaxIssueDate;
    public GetLegalSearchQueryParams withAoMaxIssueDate(LocalDate aoMaxIssueDate) {
        this.aoMaxIssueDate = aoMaxIssueDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_max_request_date")
    public LocalDate aoMaxRequestDate;
    public GetLegalSearchQueryParams withAoMaxRequestDate(LocalDate aoMaxRequestDate) {
        this.aoMaxRequestDate = aoMaxRequestDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_min_issue_date")
    public LocalDate aoMinIssueDate;
    public GetLegalSearchQueryParams withAoMinIssueDate(LocalDate aoMinIssueDate) {
        this.aoMinIssueDate = aoMinIssueDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_min_request_date")
    public LocalDate aoMinRequestDate;
    public GetLegalSearchQueryParams withAoMinRequestDate(LocalDate aoMinRequestDate) {
        this.aoMinRequestDate = aoMinRequestDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_name")
    public String[] aoName;
    public GetLegalSearchQueryParams withAoName(String[] aoName) {
        this.aoName = aoName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_no")
    public String[] aoNo;
    public GetLegalSearchQueryParams withAoNo(String[] aoNo) {
        this.aoNo = aoNo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_regulatory_citation")
    public String[] aoRegulatoryCitation;
    public GetLegalSearchQueryParams withAoRegulatoryCitation(String[] aoRegulatoryCitation) {
        this.aoRegulatoryCitation = aoRegulatoryCitation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_requestor")
    public String aoRequestor;
    public GetLegalSearchQueryParams withAoRequestor(String aoRequestor) {
        this.aoRequestor = aoRequestor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_requestor_type")
    public Integer[] aoRequestorType;
    public GetLegalSearchQueryParams withAoRequestorType(Integer[] aoRequestorType) {
        this.aoRequestorType = aoRequestorType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_status")
    public String aoStatus;
    public GetLegalSearchQueryParams withAoStatus(String aoStatus) {
        this.aoStatus = aoStatus;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ao_statutory_citation")
    public String[] aoStatutoryCitation;
    public GetLegalSearchQueryParams withAoStatutoryCitation(String[] aoStatutoryCitation) {
        this.aoStatutoryCitation = aoStatutoryCitation;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetLegalSearchQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_dispositions")
    public String[] caseDispositions;
    public GetLegalSearchQueryParams withCaseDispositions(String[] caseDispositions) {
        this.caseDispositions = caseDispositions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_document_category")
    public String[] caseDocumentCategory;
    public GetLegalSearchQueryParams withCaseDocumentCategory(String[] caseDocumentCategory) {
        this.caseDocumentCategory = caseDocumentCategory;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_election_cycles")
    public Integer caseElectionCycles;
    public GetLegalSearchQueryParams withCaseElectionCycles(Integer caseElectionCycles) {
        this.caseElectionCycles = caseElectionCycles;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_max_close_date")
    public LocalDate caseMaxCloseDate;
    public GetLegalSearchQueryParams withCaseMaxCloseDate(LocalDate caseMaxCloseDate) {
        this.caseMaxCloseDate = caseMaxCloseDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_max_open_date")
    public LocalDate caseMaxOpenDate;
    public GetLegalSearchQueryParams withCaseMaxOpenDate(LocalDate caseMaxOpenDate) {
        this.caseMaxOpenDate = caseMaxOpenDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_min_close_date")
    public LocalDate caseMinCloseDate;
    public GetLegalSearchQueryParams withCaseMinCloseDate(LocalDate caseMinCloseDate) {
        this.caseMinCloseDate = caseMinCloseDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_min_open_date")
    public LocalDate caseMinOpenDate;
    public GetLegalSearchQueryParams withCaseMinOpenDate(LocalDate caseMinOpenDate) {
        this.caseMinOpenDate = caseMinOpenDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_no")
    public String[] caseNo;
    public GetLegalSearchQueryParams withCaseNo(String[] caseNo) {
        this.caseNo = caseNo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=case_respondents")
    public String caseRespondents;
    public GetLegalSearchQueryParams withCaseRespondents(String caseRespondents) {
        this.caseRespondents = caseRespondents;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=from_hit")
    public Integer fromHit;
    public GetLegalSearchQueryParams withFromHit(Integer fromHit) {
        this.fromHit = fromHit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=hits_returned")
    public Integer hitsReturned;
    public GetLegalSearchQueryParams withHitsReturned(Integer hitsReturned) {
        this.hitsReturned = hitsReturned;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=mur_type")
    public String murType;
    public GetLegalSearchQueryParams withMurType(String murType) {
        this.murType = murType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=q")
    public String q;
    public GetLegalSearchQueryParams withQ(String q) {
        this.q = q;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=type")
    public String type;
    public GetLegalSearchQueryParams withType(String type) {
        this.type = type;
        return this;
    }
}