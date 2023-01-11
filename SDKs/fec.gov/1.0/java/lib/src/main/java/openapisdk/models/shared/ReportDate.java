package openapisdk.models.shared;

import java.time.LocalDate;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReportDate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("create_date")
    public LocalDate createDate;
    public ReportDate withCreateDate(LocalDate createDate) {
        this.createDate = createDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("due_date")
    public LocalDate dueDate;
    public ReportDate withDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type")
    public String reportType;
    public ReportDate withReportType(String reportType) {
        this.reportType = reportType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_type_full")
    public String reportTypeFull;
    public ReportDate withReportTypeFull(String reportTypeFull) {
        this.reportTypeFull = reportTypeFull;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("report_year")
    public Integer reportYear;
    public ReportDate withReportYear(Integer reportYear) {
        this.reportYear = reportYear;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("update_date")
    public LocalDate updateDate;
    public ReportDate withUpdateDate(LocalDate updateDate) {
        this.updateDate = updateDate;
        return this;
    }
}