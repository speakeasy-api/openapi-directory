package openapisdk.models.shared;

import java.time.OffsetDateTime;
import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EFilings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amended_by")
    public Integer amendedBy;
    public EFilings withAmendedBy(Integer amendedBy) {
        this.amendedBy = amendedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_chain")
    public Integer[] amendmentChain;
    public EFilings withAmendmentChain(Integer[] amendmentChain) {
        this.amendmentChain = amendmentChain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amendment_number")
    public Integer amendmentNumber;
    public EFilings withAmendmentNumber(Integer amendmentNumber) {
        this.amendmentNumber = amendmentNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amends_file")
    public Integer amendsFile;
    public EFilings withAmendsFile(Integer amendsFile) {
        this.amendsFile = amendsFile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("beginning_image_number")
    public String beginningImageNumber;
    public EFilings withBeginningImageNumber(String beginningImageNumber) {
        this.beginningImageNumber = beginningImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_id")
    public String committeeId;
    public EFilings withCommitteeId(String committeeId) {
        this.committeeId = committeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("committee_name")
    public String committeeName;
    public EFilings withCommitteeName(String committeeName) {
        this.committeeName = committeeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_end_date")
    public LocalDate coverageEndDate;
    public EFilings withCoverageEndDate(LocalDate coverageEndDate) {
        this.coverageEndDate = coverageEndDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("coverage_start_date")
    public LocalDate coverageStartDate;
    public EFilings withCoverageStartDate(LocalDate coverageStartDate) {
        this.coverageStartDate = coverageStartDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("csv_url")
    public String csvUrl;
    public EFilings withCsvUrl(String csvUrl) {
        this.csvUrl = csvUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("document_description")
    public String documentDescription;
    public EFilings withDocumentDescription(String documentDescription) {
        this.documentDescription = documentDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ending_image_number")
    public String endingImageNumber;
    public EFilings withEndingImageNumber(String endingImageNumber) {
        this.endingImageNumber = endingImageNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_file_id")
    public String fecFileId;
    public EFilings withFecFileId(String fecFileId) {
        this.fecFileId = fecFileId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fec_url")
    public String fecUrl;
    public EFilings withFecUrl(String fecUrl) {
        this.fecUrl = fecUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("file_number")
    public Integer fileNumber;
    public EFilings withFileNumber(Integer fileNumber) {
        this.fileNumber = fileNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filed_date")
    public LocalDate filedDate;
    public EFilings withFiledDate(LocalDate filedDate) {
        this.filedDate = filedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("form_type")
    public String formType;
    public EFilings withFormType(String formType) {
        this.formType = formType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("html_url")
    public String htmlUrl;
    public EFilings withHtmlUrl(String htmlUrl) {
        this.htmlUrl = htmlUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_amended")
    public Boolean isAmended;
    public EFilings withIsAmended(Boolean isAmended) {
        this.isAmended = isAmended;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("load_timestamp")
    public OffsetDateTime loadTimestamp;
    public EFilings withLoadTimestamp(OffsetDateTime loadTimestamp) {
        this.loadTimestamp = loadTimestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent")
    public Boolean mostRecent;
    public EFilings withMostRecent(Boolean mostRecent) {
        this.mostRecent = mostRecent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("most_recent_filing")
    public Integer mostRecentFiling;
    public EFilings withMostRecentFiling(Integer mostRecentFiling) {
        this.mostRecentFiling = mostRecentFiling;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pdf_url")
    public String pdfUrl;
    public EFilings withPdfUrl(String pdfUrl) {
        this.pdfUrl = pdfUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("receipt_date")
    public OffsetDateTime receiptDate;
    public EFilings withReceiptDate(OffsetDateTime receiptDate) {
        this.receiptDate = receiptDate;
        return this;
    }
}