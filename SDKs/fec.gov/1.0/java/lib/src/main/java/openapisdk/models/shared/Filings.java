package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Filings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additional_bank_names")
    public String[] additionalBankNames;
    public Filings withAdditionalBankNames(String[] additionalBankNames) {
        this.additionalBankNames = additionalBankNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_chain")
    public Double[] amendmentChain;
    public Filings withAmendmentChain(Double[] amendmentChain) {
        this.amendmentChain = amendmentChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_indicator")
    public String amendmentIndicator;
    public Filings withAmendmentIndicator(String amendmentIndicator) {
        this.amendmentIndicator = amendmentIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_version")
    public Integer amendmentVersion;
    public Filings withAmendmentVersion(Integer amendmentVersion) {
        this.amendmentVersion = amendmentVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_depository_city")
    public String bankDepositoryCity;
    public Filings withBankDepositoryCity(String bankDepositoryCity) {
        this.bankDepositoryCity = bankDepositoryCity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_depository_name")
    public String bankDepositoryName;
    public Filings withBankDepositoryName(String bankDepositoryName) {
        this.bankDepositoryName = bankDepositoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_depository_state")
    public String bankDepositoryState;
    public Filings withBankDepositoryState(String bankDepositoryState) {
        this.bankDepositoryState = bankDepositoryState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_depository_street_1")
    public String bankDepositoryStreet1;
    public Filings withBankDepositoryStreet1(String bankDepositoryStreet1) {
        this.bankDepositoryStreet1 = bankDepositoryStreet1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_depository_street_2")
    public String bankDepositoryStreet2;
    public Filings withBankDepositoryStreet2(String bankDepositoryStreet2) {
        this.bankDepositoryStreet2 = bankDepositoryStreet2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bank_depository_zip")
    public String bankDepositoryZip;
    public Filings withBankDepositoryZip(String bankDepositoryZip) {
        this.bankDepositoryZip = bankDepositoryZip;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginning_image_number")
    public String beginningImageNumber;
    public Filings withBeginningImageNumber(String beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public Filings withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public Filings withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash_on_hand_beginning_period")
    public Double cashOnHandBeginningPeriod;
    public Filings withCashOnHandBeginningPeriod(Double cashOnHandBeginningPeriod) {
        this.cashOnHandBeginningPeriod = cashOnHandBeginningPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash_on_hand_end_period")
    public Double cashOnHandEndPeriod;
    public Filings withCashOnHandEndPeriod(Double cashOnHandEndPeriod) {
        this.cashOnHandEndPeriod = cashOnHandEndPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public Filings withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public Filings withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_type")
    public String committeeType;
    public Filings withCommitteeType(String committeeType) {
        this.committeeType = committeeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_end_date")
    public LocalDate coverageEndDate;
    public Filings withCoverageEndDate(LocalDate coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_start_date")
    public LocalDate coverageStartDate;
    public Filings withCoverageStartDate(LocalDate coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv_url")
    public String csvUrl;
    public Filings withCsvUrl(String csvUrl) {
        this.csvUrl = csvUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cycle")
    public Integer cycle;
    public Filings withCycle(Integer cycle) {
        this.cycle = cycle;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debts_owed_by_committee")
    public Double debtsOwedByCommittee;
    public Filings withDebtsOwedByCommittee(Double debtsOwedByCommittee) {
        this.debtsOwedByCommittee = debtsOwedByCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("debts_owed_to_committee")
    public Double debtsOwedToCommittee;
    public Filings withDebtsOwedToCommittee(Double debtsOwedToCommittee) {
        this.debtsOwedToCommittee = debtsOwedToCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_description")
    public String documentDescription;
    public Filings withDocumentDescription(String documentDescription) {
        this.documentDescription = documentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_type")
    public String documentType;
    public Filings withDocumentType(String documentType) {
        this.documentType = documentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_type_full")
    public String documentTypeFull;
    public Filings withDocumentTypeFull(String documentTypeFull) {
        this.documentTypeFull = documentTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_year")
    public Integer electionYear;
    public Filings withElectionYear(Integer electionYear) {
        this.electionYear = electionYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ending_image_number")
    public String endingImageNumber;
    public Filings withEndingImageNumber(String endingImageNumber) {
        this.endingImageNumber = endingImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_file_id")
    public String fecFileId;
    public Filings withFecFileId(String fecFileId) {
        this.fecFileId = fecFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_url")
    public String fecUrl;
    public Filings withFecUrl(String fecUrl) {
        this.fecUrl = fecUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public Filings withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_category")
    public String formCategory;
    public Filings withFormCategory(String formCategory) {
        this.formCategory = formCategory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_type")
    public String formType;
    public Filings withFormType(String formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("house_personal_funds")
    public Double housePersonalFunds;
    public Filings withHousePersonalFunds(Double housePersonalFunds) {
        this.housePersonalFunds = housePersonalFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public Filings withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_amended")
    public Boolean isAmended;
    public Filings withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("means_filed")
    public String meansFiled;
    public Filings withMeansFiled(String meansFiled) {
        this.meansFiled = meansFiled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent")
    public Boolean mostRecent;
    public Filings withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent_file_number")
    public Integer mostRecentFileNumber;
    public Filings withMostRecentFileNumber(Integer mostRecentFileNumber) {
        this.mostRecentFileNumber = mostRecentFileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("net_donations")
    public Double netDonations;
    public Filings withNetDonations(Double netDonations) {
        this.netDonations = netDonations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("office")
    public String office;
    public Filings withOffice(String office) {
        this.office = office;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("opposition_personal_funds")
    public Double oppositionPersonalFunds;
    public Filings withOppositionPersonalFunds(Double oppositionPersonalFunds) {
        this.oppositionPersonalFunds = oppositionPersonalFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pages")
    public Integer pages;
    public Filings withPages(Integer pages) {
        this.pages = pages;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("party")
    public String party;
    public Filings withParty(String party) {
        this.party = party;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public Filings withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous_file_number")
    public Integer previousFileNumber;
    public Filings withPreviousFileNumber(Integer previousFileNumber) {
        this.previousFileNumber = previousFileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_general_indicator")
    public String primaryGeneralIndicator;
    public Filings withPrimaryGeneralIndicator(String primaryGeneralIndicator) {
        this.primaryGeneralIndicator = primaryGeneralIndicator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_date")
    public LocalDate receiptDate;
    public Filings withReceiptDate(LocalDate receiptDate) {
        this.receiptDate = receiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public Filings withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type_full")
    public String reportTypeFull;
    public Filings withReportTypeFull(String reportTypeFull) {
        this.reportTypeFull = reportTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public Filings withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_type")
    public String requestType;
    public Filings withRequestType(String requestType) {
        this.requestType = requestType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("senate_personal_funds")
    public Double senatePersonalFunds;
    public Filings withSenatePersonalFunds(Double senatePersonalFunds) {
        this.senatePersonalFunds = senatePersonalFunds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public Filings withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_id")
    public String subId;
    public Filings withSubId(String subId) {
        this.subId = subId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_communication_cost")
    public Double totalCommunicationCost;
    public Filings withTotalCommunicationCost(Double totalCommunicationCost) {
        this.totalCommunicationCost = totalCommunicationCost;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_disbursements")
    public Double totalDisbursements;
    public Filings withTotalDisbursements(Double totalDisbursements) {
        this.totalDisbursements = totalDisbursements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_independent_expenditures")
    public Double totalIndependentExpenditures;
    public Filings withTotalIndependentExpenditures(Double totalIndependentExpenditures) {
        this.totalIndependentExpenditures = totalIndependentExpenditures;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_individual_contributions")
    public Double totalIndividualContributions;
    public Filings withTotalIndividualContributions(Double totalIndividualContributions) {
        this.totalIndividualContributions = totalIndividualContributions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_receipts")
    public Double totalReceipts;
    public Filings withTotalReceipts(Double totalReceipts) {
        this.totalReceipts = totalReceipts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name")
    public String treasurerName;
    public Filings withTreasurerName(String treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public LocalDate updateDate;
    public Filings withUpdateDate(LocalDate updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}