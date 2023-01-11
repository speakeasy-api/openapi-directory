package openapisdk.models.operations;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLegalSearchDefaultApplicationJsonAdminFines {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge_outcome")
    public String challengeOutcome;
    public GetLegalSearchDefaultApplicationJsonAdminFines withChallengeOutcome(String challengeOutcome) {
        this.challengeOutcome = challengeOutcome;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("challenge_receipt_date")
    public LocalDate challengeReceiptDate;
    public GetLegalSearchDefaultApplicationJsonAdminFines withChallengeReceiptDate(LocalDate challengeReceiptDate) {
        this.challengeReceiptDate = challengeReceiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("check_amount")
    public Double checkAmount;
    public GetLegalSearchDefaultApplicationJsonAdminFines withCheckAmount(Double checkAmount) {
        this.checkAmount = checkAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("commission_votes")
    public GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes[] commissionVotes;
    public GetLegalSearchDefaultApplicationJsonAdminFines withCommissionVotes(GetLegalSearchDefaultApplicationJsonAdminFinesCommissionVotes[] commissionVotes) {
        this.commissionVotes = commissionVotes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public GetLegalSearchDefaultApplicationJsonAdminFines withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("doc_id")
    public String docId;
    public GetLegalSearchDefaultApplicationJsonAdminFines withDocId(String docId) {
        this.docId = docId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_highlights")
    public java.util.Map<String, Object> documentHighlights;
    public GetLegalSearchDefaultApplicationJsonAdminFines withDocumentHighlights(java.util.Map<String, Object> documentHighlights) {
        this.documentHighlights = documentHighlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documents")
    public GetLegalSearchDefaultApplicationJsonAdminFinesDocuments[] documents;
    public GetLegalSearchDefaultApplicationJsonAdminFines withDocuments(GetLegalSearchDefaultApplicationJsonAdminFinesDocuments[] documents) {
        this.documents = documents;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("final_determination_amount")
    public Double finalDeterminationAmount;
    public GetLegalSearchDefaultApplicationJsonAdminFines withFinalDeterminationAmount(Double finalDeterminationAmount) {
        this.finalDeterminationAmount = finalDeterminationAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("final_determination_date")
    public LocalDate finalDeterminationDate;
    public GetLegalSearchDefaultApplicationJsonAdminFines withFinalDeterminationDate(LocalDate finalDeterminationDate) {
        this.finalDeterminationDate = finalDeterminationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("highlights")
    public String[] highlights;
    public GetLegalSearchDefaultApplicationJsonAdminFines withHighlights(String[] highlights) {
        this.highlights = highlights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetLegalSearchDefaultApplicationJsonAdminFines withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("no")
    public String no;
    public GetLegalSearchDefaultApplicationJsonAdminFines withNo(String no) {
        this.no = no;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("petition_court_decision_date")
    public LocalDate petitionCourtDecisionDate;
    public GetLegalSearchDefaultApplicationJsonAdminFines withPetitionCourtDecisionDate(LocalDate petitionCourtDecisionDate) {
        this.petitionCourtDecisionDate = petitionCourtDecisionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("petition_court_filing_date")
    public LocalDate petitionCourtFilingDate;
    public GetLegalSearchDefaultApplicationJsonAdminFines withPetitionCourtFilingDate(LocalDate petitionCourtFilingDate) {
        this.petitionCourtFilingDate = petitionCourtFilingDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason_to_believe_action_date")
    public LocalDate reasonToBelieveActionDate;
    public GetLegalSearchDefaultApplicationJsonAdminFines withReasonToBelieveActionDate(LocalDate reasonToBelieveActionDate) {
        this.reasonToBelieveActionDate = reasonToBelieveActionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reason_to_believe_fine_amount")
    public Double reasonToBelieveFineAmount;
    public GetLegalSearchDefaultApplicationJsonAdminFines withReasonToBelieveFineAmount(Double reasonToBelieveFineAmount) {
        this.reasonToBelieveFineAmount = reasonToBelieveFineAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public GetLegalSearchDefaultApplicationJsonAdminFines withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public String reportYear;
    public GetLegalSearchDefaultApplicationJsonAdminFines withReportYear(String reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasury_referral_amount")
    public Double treasuryReferralAmount;
    public GetLegalSearchDefaultApplicationJsonAdminFines withTreasuryReferralAmount(Double treasuryReferralAmount) {
        this.treasuryReferralAmount = treasuryReferralAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasury_referral_date")
    public LocalDate treasuryReferralDate;
    public GetLegalSearchDefaultApplicationJsonAdminFines withTreasuryReferralDate(LocalDate treasuryReferralDate) {
        this.treasuryReferralDate = treasuryReferralDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public GetLegalSearchDefaultApplicationJsonAdminFines withUrl(String url) {
        this.url = url;
        return this;
    }
}