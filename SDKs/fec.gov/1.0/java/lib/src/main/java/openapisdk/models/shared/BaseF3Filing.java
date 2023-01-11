package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BaseF3Filing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amended_address")
    public String amendedAddress;
    public BaseF3Filing withAmendedAddress(String amendedAddress) {
        this.amendedAddress = amendedAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amended_by")
    public Integer amendedBy;
    public BaseF3Filing withAmendedBy(Integer amendedBy) {
        this.amendedBy = amendedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment")
    public String amendment;
    public BaseF3Filing withAmendment(String amendment) {
        this.amendment = amendment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_chain")
    public Integer[] amendmentChain;
    public BaseF3Filing withAmendmentChain(Integer[] amendmentChain) {
        this.amendmentChain = amendmentChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginning_image_number")
    public String beginningImageNumber;
    public BaseF3Filing withBeginningImageNumber(String beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_first_name")
    public String candidateFirstName;
    public BaseF3Filing withCandidateFirstName(String candidateFirstName) {
        this.candidateFirstName = candidateFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_id")
    public String candidateId;
    public BaseF3Filing withCandidateId(String candidateId) {
        this.candidateId = candidateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_last_name")
    public String candidateLastName;
    public BaseF3Filing withCandidateLastName(String candidateLastName) {
        this.candidateLastName = candidateLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_middle_name")
    public String candidateMiddleName;
    public BaseF3Filing withCandidateMiddleName(String candidateMiddleName) {
        this.candidateMiddleName = candidateMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_name")
    public String candidateName;
    public BaseF3Filing withCandidateName(String candidateName) {
        this.candidateName = candidateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_prefix")
    public String candidatePrefix;
    public BaseF3Filing withCandidatePrefix(String candidatePrefix) {
        this.candidatePrefix = candidatePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("candidate_suffix")
    public String candidateSuffix;
    public BaseF3Filing withCandidateSuffix(String candidateSuffix) {
        this.candidateSuffix = candidateSuffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cash_on_hand_beginning_period")
    public Integer cashOnHandBeginningPeriod;
    public BaseF3Filing withCashOnHandBeginningPeriod(Integer cashOnHandBeginningPeriod) {
        this.cashOnHandBeginningPeriod = cashOnHandBeginningPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public BaseF3Filing withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public BaseF3Filing withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public BaseF3Filing withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_end_date")
    public LocalDate coverageEndDate;
    public BaseF3Filing withCoverageEndDate(LocalDate coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_start_date")
    public LocalDate coverageStartDate;
    public BaseF3Filing withCoverageStartDate(LocalDate coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv_url")
    public String csvUrl;
    public BaseF3Filing withCsvUrl(String csvUrl) {
        this.csvUrl = csvUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("district")
    public Integer district;
    public BaseF3Filing withDistrict(Integer district) {
        this.district = district;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_description")
    public String documentDescription;
    public BaseF3Filing withDocumentDescription(String documentDescription) {
        this.documentDescription = documentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_date")
    public LocalDate electionDate;
    public BaseF3Filing withElectionDate(LocalDate electionDate) {
        this.electionDate = electionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_state")
    public String electionState;
    public BaseF3Filing withElectionState(String electionState) {
        this.electionState = electionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("f3z1")
    public Integer f3z1;
    public BaseF3Filing withF3z1(Integer f3z1) {
        this.f3z1 = f3z1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_file_id")
    public String fecFileId;
    public BaseF3Filing withFecFileId(String fecFileId) {
        this.fecFileId = fecFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_url")
    public String fecUrl;
    public BaseF3Filing withFecUrl(String fecUrl) {
        this.fecUrl = fecUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public BaseF3Filing withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("general_election")
    public String generalElection;
    public BaseF3Filing withGeneralElection(String generalElection) {
        this.generalElection = generalElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_amended")
    public Boolean isAmended;
    public BaseF3Filing withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent")
    public Boolean mostRecent;
    public BaseF3Filing withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent_filing")
    public Integer mostRecentFiling;
    public BaseF3Filing withMostRecentFiling(Integer mostRecentFiling) {
        this.mostRecentFiling = mostRecentFiling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public BaseF3Filing withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prefix")
    public String prefix;
    public BaseF3Filing withPrefix(String prefix) {
        this.prefix = prefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_election")
    public String primaryElection;
    public BaseF3Filing withPrimaryElection(String primaryElection) {
        this.primaryElection = primaryElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_date")
    public LocalDate receiptDate;
    public BaseF3Filing withReceiptDate(LocalDate receiptDate) {
        this.receiptDate = receiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report")
    public String report;
    public BaseF3Filing withReport(String report) {
        this.report = report;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public BaseF3Filing withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public BaseF3Filing withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rpt_pgi")
    public String rptPgi;
    public BaseF3Filing withRptPgi(String rptPgi) {
        this.rptPgi = rptPgi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runoff_election")
    public String runoffElection;
    public BaseF3Filing withRunoffElection(String runoffElection) {
        this.runoffElection = runoffElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_date")
    public LocalDate signDate;
    public BaseF3Filing withSignDate(LocalDate signDate) {
        this.signDate = signDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("special_election")
    public String specialElection;
    public BaseF3Filing withSpecialElection(String specialElection) {
        this.specialElection = specialElection;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public BaseF3Filing withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_1")
    public String street1;
    public BaseF3Filing withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_2")
    public String street2;
    public BaseF3Filing withStreet2(String street2) {
        this.street2 = street2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("suffix")
    public String suffix;
    public BaseF3Filing withSuffix(String suffix) {
        this.suffix = suffix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary_lines")
    public String summaryLines;
    public BaseF3Filing withSummaryLines(String summaryLines) {
        this.summaryLines = summaryLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_first_name")
    public String treasurerFirstName;
    public BaseF3Filing withTreasurerFirstName(String treasurerFirstName) {
        this.treasurerFirstName = treasurerFirstName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_last_name")
    public String treasurerLastName;
    public BaseF3Filing withTreasurerLastName(String treasurerLastName) {
        this.treasurerLastName = treasurerLastName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_middle_name")
    public String treasurerMiddleName;
    public BaseF3Filing withTreasurerMiddleName(String treasurerMiddleName) {
        this.treasurerMiddleName = treasurerMiddleName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("treasurer_name")
    public String treasurerName;
    public BaseF3Filing withTreasurerName(String treasurerName) {
        this.treasurerName = treasurerName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public BaseF3Filing withZip(String zip) {
        this.zip = zip;
        return this;
    }
}