package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportDefinition
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition. 
**/
public class ReportDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AdditionalArtifacts")
    public AdditionalArtifactEnum[] additionalArtifacts;
    public ReportDefinition withAdditionalArtifacts(AdditionalArtifactEnum[] additionalArtifacts) {
        this.additionalArtifacts = additionalArtifacts;
        return this;
    }
    @JsonProperty("AdditionalSchemaElements")
    public SchemaElementEnum[] additionalSchemaElements;
    public ReportDefinition withAdditionalSchemaElements(SchemaElementEnum[] additionalSchemaElements) {
        this.additionalSchemaElements = additionalSchemaElements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BillingViewArn")
    public String billingViewArn;
    public ReportDefinition withBillingViewArn(String billingViewArn) {
        this.billingViewArn = billingViewArn;
        return this;
    }
    @JsonProperty("Compression")
    public CompressionFormatEnum compression;
    public ReportDefinition withCompression(CompressionFormatEnum compression) {
        this.compression = compression;
        return this;
    }
    @JsonProperty("Format")
    public ReportFormatEnum format;
    public ReportDefinition withFormat(ReportFormatEnum format) {
        this.format = format;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RefreshClosedReports")
    public Boolean refreshClosedReports;
    public ReportDefinition withRefreshClosedReports(Boolean refreshClosedReports) {
        this.refreshClosedReports = refreshClosedReports;
        return this;
    }
    @JsonProperty("ReportName")
    public String reportName;
    public ReportDefinition withReportName(String reportName) {
        this.reportName = reportName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReportVersioning")
    public ReportVersioningEnum reportVersioning;
    public ReportDefinition withReportVersioning(ReportVersioningEnum reportVersioning) {
        this.reportVersioning = reportVersioning;
        return this;
    }
    @JsonProperty("S3Bucket")
    public String s3Bucket;
    public ReportDefinition withS3Bucket(String s3Bucket) {
        this.s3Bucket = s3Bucket;
        return this;
    }
    @JsonProperty("S3Prefix")
    public String s3Prefix;
    public ReportDefinition withS3Prefix(String s3Prefix) {
        this.s3Prefix = s3Prefix;
        return this;
    }
    @JsonProperty("S3Region")
    public AwsRegionEnum s3Region;
    public ReportDefinition withS3Region(AwsRegionEnum s3Region) {
        this.s3Region = s3Region;
        return this;
    }
    @JsonProperty("TimeUnit")
    public TimeUnitEnum timeUnit;
    public ReportDefinition withTimeUnit(TimeUnitEnum timeUnit) {
        this.timeUnit = timeUnit;
        return this;
    }
}