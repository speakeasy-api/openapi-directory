package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * CodeCoverage
 * <p>Contains code coverage report information.</p> <p>Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.</p> <p>Branch coverage determines if your tests cover every possible branch of a control structure, such as an <code>if</code> or <code>case</code> statement.</p>
**/
public class CodeCoverage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchCoveragePercentage")
    public Double branchCoveragePercentage;
    public CodeCoverage withBranchCoveragePercentage(Double branchCoveragePercentage) {
        this.branchCoveragePercentage = branchCoveragePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchesCovered")
    public Long branchesCovered;
    public CodeCoverage withBranchesCovered(Long branchesCovered) {
        this.branchesCovered = branchesCovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchesMissed")
    public Long branchesMissed;
    public CodeCoverage withBranchesMissed(Long branchesMissed) {
        this.branchesMissed = branchesMissed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("expired")
    public OffsetDateTime expired;
    public CodeCoverage withExpired(OffsetDateTime expired) {
        this.expired = expired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filePath")
    public String filePath;
    public CodeCoverage withFilePath(String filePath) {
        this.filePath = filePath;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public CodeCoverage withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineCoveragePercentage")
    public Double lineCoveragePercentage;
    public CodeCoverage withLineCoveragePercentage(Double lineCoveragePercentage) {
        this.lineCoveragePercentage = lineCoveragePercentage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linesCovered")
    public Long linesCovered;
    public CodeCoverage withLinesCovered(Long linesCovered) {
        this.linesCovered = linesCovered;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linesMissed")
    public Long linesMissed;
    public CodeCoverage withLinesMissed(Long linesMissed) {
        this.linesMissed = linesMissed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportARN")
    public String reportARN;
    public CodeCoverage withReportArn(String reportARN) {
        this.reportARN = reportARN;
        return this;
    }
}