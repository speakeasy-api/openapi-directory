/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CodeCoverageReportSummary - &lt;p&gt;Contains a summary of a code coverage report.&lt;/p&gt; &lt;p&gt;Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.&lt;/p&gt; &lt;p&gt;Branch coverage determines if your tests cover every possible branch of a control structure, such as an &lt;code&gt;if&lt;/code&gt; or &lt;code&gt;case&lt;/code&gt; statement.&lt;/p&gt;
 */
public class CodeCoverageReportSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchCoveragePercentage")
    public Double branchCoveragePercentage;

    public CodeCoverageReportSummary withBranchCoveragePercentage(Double branchCoveragePercentage) {
        this.branchCoveragePercentage = branchCoveragePercentage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchesCovered")
    public Long branchesCovered;

    public CodeCoverageReportSummary withBranchesCovered(Long branchesCovered) {
        this.branchesCovered = branchesCovered;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("branchesMissed")
    public Long branchesMissed;

    public CodeCoverageReportSummary withBranchesMissed(Long branchesMissed) {
        this.branchesMissed = branchesMissed;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lineCoveragePercentage")
    public Double lineCoveragePercentage;

    public CodeCoverageReportSummary withLineCoveragePercentage(Double lineCoveragePercentage) {
        this.lineCoveragePercentage = lineCoveragePercentage;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linesCovered")
    public Long linesCovered;

    public CodeCoverageReportSummary withLinesCovered(Long linesCovered) {
        this.linesCovered = linesCovered;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("linesMissed")
    public Long linesMissed;

    public CodeCoverageReportSummary withLinesMissed(Long linesMissed) {
        this.linesMissed = linesMissed;
        return this;
    }
    
    public CodeCoverageReportSummary(){}
}
