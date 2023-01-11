package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BaseF3XFiling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amend_address")
    public String amendAddress;
    public BaseF3XFiling withAmendAddress(String amendAddress) {
        this.amendAddress = amendAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amended_by")
    public Integer amendedBy;
    public BaseF3XFiling withAmendedBy(Integer amendedBy) {
        this.amendedBy = amendedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment")
    public String amendment;
    public BaseF3XFiling withAmendment(String amendment) {
        this.amendment = amendment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_chain")
    public Integer[] amendmentChain;
    public BaseF3XFiling withAmendmentChain(Integer[] amendmentChain) {
        this.amendmentChain = amendmentChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginning_image_number")
    public String beginningImageNumber;
    public BaseF3XFiling withBeginningImageNumber(String beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("city")
    public String city;
    public BaseF3XFiling withCity(String city) {
        this.city = city;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public BaseF3XFiling withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public BaseF3XFiling withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_end_date")
    public LocalDate coverageEndDate;
    public BaseF3XFiling withCoverageEndDate(LocalDate coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_start_date")
    public LocalDate coverageStartDate;
    public BaseF3XFiling withCoverageStartDate(LocalDate coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv_url")
    public String csvUrl;
    public BaseF3XFiling withCsvUrl(String csvUrl) {
        this.csvUrl = csvUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_description")
    public String documentDescription;
    public BaseF3XFiling withDocumentDescription(String documentDescription) {
        this.documentDescription = documentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_date")
    public LocalDate electionDate;
    public BaseF3XFiling withElectionDate(LocalDate electionDate) {
        this.electionDate = electionDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("election_state")
    public String electionState;
    public BaseF3XFiling withElectionState(String electionState) {
        this.electionState = electionState;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_file_id")
    public String fecFileId;
    public BaseF3XFiling withFecFileId(String fecFileId) {
        this.fecFileId = fecFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_url")
    public String fecUrl;
    public BaseF3XFiling withFecUrl(String fecUrl) {
        this.fecUrl = fecUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public BaseF3XFiling withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_amended")
    public Boolean isAmended;
    public BaseF3XFiling withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent")
    public Boolean mostRecent;
    public BaseF3XFiling withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent_filing")
    public Integer mostRecentFiling;
    public BaseF3XFiling withMostRecentFiling(Integer mostRecentFiling) {
        this.mostRecentFiling = mostRecentFiling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public BaseF3XFiling withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qualified_multicandidate_committee")
    public String qualifiedMulticandidateCommittee;
    public BaseF3XFiling withQualifiedMulticandidateCommittee(String qualifiedMulticandidateCommittee) {
        this.qualifiedMulticandidateCommittee = qualifiedMulticandidateCommittee;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receipt_date")
    public LocalDate receiptDate;
    public BaseF3XFiling withReceiptDate(LocalDate receiptDate) {
        this.receiptDate = receiptDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report")
    public String report;
    public BaseF3XFiling withReport(String report) {
        this.report = report;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public BaseF3XFiling withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public BaseF3XFiling withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rpt_pgi")
    public String rptPgi;
    public BaseF3XFiling withRptPgi(String rptPgi) {
        this.rptPgi = rptPgi;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sign_date")
    public LocalDate signDate;
    public BaseF3XFiling withSignDate(LocalDate signDate) {
        this.signDate = signDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("state")
    public String state;
    public BaseF3XFiling withState(String state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_1")
    public String street1;
    public BaseF3XFiling withStreet1(String street1) {
        this.street1 = street1;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("street_2")
    public String street2;
    public BaseF3XFiling withStreet2(String street2) {
        this.street2 = street2;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary_lines")
    public String summaryLines;
    public BaseF3XFiling withSummaryLines(String summaryLines) {
        this.summaryLines = summaryLines;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("zip")
    public String zip;
    public BaseF3XFiling withZip(String zip) {
        this.zip = zip;
        return this;
    }
}