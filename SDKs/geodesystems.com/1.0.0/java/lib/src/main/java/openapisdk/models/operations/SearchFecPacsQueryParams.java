package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class SearchFecPacsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.from")
    public OffsetDateTime changedateFrom;
    public SearchFecPacsQueryParams withChangedateFrom(OffsetDateTime changedateFrom) {
        this.changedateFrom = changedateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=changedate.to")
    public OffsetDateTime changedateTo;
    public SearchFecPacsQueryParams withChangedateTo(OffsetDateTime changedateTo) {
        this.changedateTo = changedateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.from")
    public OffsetDateTime createdateFrom;
    public SearchFecPacsQueryParams withCreatedateFrom(OffsetDateTime createdateFrom) {
        this.createdateFrom = createdateFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=createdate.to")
    public OffsetDateTime createdateTo;
    public SearchFecPacsQueryParams withCreatedateTo(OffsetDateTime createdateTo) {
        this.createdateTo = createdateTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=description")
    public String description;
    public SearchFecPacsQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=filesuffix")
    public String filesuffix;
    public SearchFecPacsQueryParams withFilesuffix(String filesuffix) {
        this.filesuffix = filesuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fromdate")
    public OffsetDateTime fromdate;
    public SearchFecPacsQueryParams withFromdate(OffsetDateTime fromdate) {
        this.fromdate = fromdate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=group")
    public String group;
    public SearchFecPacsQueryParams withGroup(String group) {
        this.group = group;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=max")
    public Long max;
    public SearchFecPacsQueryParams withMax(Long max) {
        this.max = max;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlatitude")
    public Float maxlatitude;
    public SearchFecPacsQueryParams withMaxlatitude(Float maxlatitude) {
        this.maxlatitude = maxlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=maxlongitude")
    public Float maxlongitude;
    public SearchFecPacsQueryParams withMaxlongitude(Float maxlongitude) {
        this.maxlongitude = maxlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlatitude")
    public Float minlatitude;
    public SearchFecPacsQueryParams withMinlatitude(Float minlatitude) {
        this.minlatitude = minlatitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=minlongitude")
    public Float minlongitude;
    public SearchFecPacsQueryParams withMinlongitude(Float minlongitude) {
        this.minlongitude = minlongitude;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public SearchFecPacsQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.beginning_cash")
    public Double searchDbFecPacsBeginningCash;
    public SearchFecPacsQueryParams withSearchDbFecPacsBeginningCash(Double searchDbFecPacsBeginningCash) {
        this.searchDbFecPacsBeginningCash = searchDbFecPacsBeginningCash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.candidate_loan_repayments")
    public Double searchDbFecPacsCandidateLoanRepayments;
    public SearchFecPacsQueryParams withSearchDbFecPacsCandidateLoanRepayments(Double searchDbFecPacsCandidateLoanRepayments) {
        this.searchDbFecPacsCandidateLoanRepayments = searchDbFecPacsCandidateLoanRepayments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.committee")
    public String searchDbFecPacsCommittee;
    public SearchFecPacsQueryParams withSearchDbFecPacsCommittee(String searchDbFecPacsCommittee) {
        this.searchDbFecPacsCommittee = searchDbFecPacsCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.contributions_from_candidate")
    public Double searchDbFecPacsContributionsFromCandidate;
    public SearchFecPacsQueryParams withSearchDbFecPacsContributionsFromCandidate(Double searchDbFecPacsContributionsFromCandidate) {
        this.searchDbFecPacsContributionsFromCandidate = searchDbFecPacsContributionsFromCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.contributions_from_individuals")
    public Double searchDbFecPacsContributionsFromIndividuals;
    public SearchFecPacsQueryParams withSearchDbFecPacsContributionsFromIndividuals(Double searchDbFecPacsContributionsFromIndividuals) {
        this.searchDbFecPacsContributionsFromIndividuals = searchDbFecPacsContributionsFromIndividuals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.contributions_from_other_committees")
    public Double searchDbFecPacsContributionsFromOtherCommittees;
    public SearchFecPacsQueryParams withSearchDbFecPacsContributionsFromOtherCommittees(Double searchDbFecPacsContributionsFromOtherCommittees) {
        this.searchDbFecPacsContributionsFromOtherCommittees = searchDbFecPacsContributionsFromOtherCommittees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.contributions_to_other_committee")
    public Double searchDbFecPacsContributionsToOtherCommittee;
    public SearchFecPacsQueryParams withSearchDbFecPacsContributionsToOtherCommittee(Double searchDbFecPacsContributionsToOtherCommittee) {
        this.searchDbFecPacsContributionsToOtherCommittee = searchDbFecPacsContributionsToOtherCommittee;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.ending_cash")
    public Double searchDbFecPacsEndingCash;
    public SearchFecPacsQueryParams withSearchDbFecPacsEndingCash(Double searchDbFecPacsEndingCash) {
        this.searchDbFecPacsEndingCash = searchDbFecPacsEndingCash;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.loan_repayments")
    public Double searchDbFecPacsLoanRepayments;
    public SearchFecPacsQueryParams withSearchDbFecPacsLoanRepayments(Double searchDbFecPacsLoanRepayments) {
        this.searchDbFecPacsLoanRepayments = searchDbFecPacsLoanRepayments;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.loans_from_candidate")
    public Double searchDbFecPacsLoansFromCandidate;
    public SearchFecPacsQueryParams withSearchDbFecPacsLoansFromCandidate(Double searchDbFecPacsLoansFromCandidate) {
        this.searchDbFecPacsLoansFromCandidate = searchDbFecPacsLoansFromCandidate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.refends_to_othercommittees")
    public Double searchDbFecPacsRefendsToOthercommittees;
    public SearchFecPacsQueryParams withSearchDbFecPacsRefendsToOthercommittees(Double searchDbFecPacsRefendsToOthercommittees) {
        this.searchDbFecPacsRefendsToOthercommittees = searchDbFecPacsRefendsToOthercommittees;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.refunds_to_individuals")
    public Double searchDbFecPacsRefundsToIndividuals;
    public SearchFecPacsQueryParams withSearchDbFecPacsRefundsToIndividuals(Double searchDbFecPacsRefundsToIndividuals) {
        this.searchDbFecPacsRefundsToIndividuals = searchDbFecPacsRefundsToIndividuals;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.total_distributions")
    public Double searchDbFecPacsTotalDistributions;
    public SearchFecPacsQueryParams withSearchDbFecPacsTotalDistributions(Double searchDbFecPacsTotalDistributions) {
        this.searchDbFecPacsTotalDistributions = searchDbFecPacsTotalDistributions;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.total_loans_received")
    public Double searchDbFecPacsTotalLoansReceived;
    public SearchFecPacsQueryParams withSearchDbFecPacsTotalLoansReceived(Double searchDbFecPacsTotalLoansReceived) {
        this.searchDbFecPacsTotalLoansReceived = searchDbFecPacsTotalLoansReceived;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.total_receipts")
    public Double searchDbFecPacsTotalReceipts;
    public SearchFecPacsQueryParams withSearchDbFecPacsTotalReceipts(Double searchDbFecPacsTotalReceipts) {
        this.searchDbFecPacsTotalReceipts = searchDbFecPacsTotalReceipts;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.trans_from_affiliates")
    public Double searchDbFecPacsTransFromAffiliates;
    public SearchFecPacsQueryParams withSearchDbFecPacsTransFromAffiliates(Double searchDbFecPacsTransFromAffiliates) {
        this.searchDbFecPacsTransFromAffiliates = searchDbFecPacsTransFromAffiliates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=search.db_fec_pacs.transfers_to_affiliates")
    public Double searchDbFecPacsTransfersToAffiliates;
    public SearchFecPacsQueryParams withSearchDbFecPacsTransfersToAffiliates(Double searchDbFecPacsTransfersToAffiliates) {
        this.searchDbFecPacsTransfersToAffiliates = searchDbFecPacsTransfersToAffiliates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=skip")
    public Long skip;
    public SearchFecPacsQueryParams withSkip(Long skip) {
        this.skip = skip;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=text")
    public String text;
    public SearchFecPacsQueryParams withText(String text) {
        this.text = text;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=todate")
    public OffsetDateTime todate;
    public SearchFecPacsQueryParams withTodate(OffsetDateTime todate) {
        this.todate = todate;
        return this;
    }
}