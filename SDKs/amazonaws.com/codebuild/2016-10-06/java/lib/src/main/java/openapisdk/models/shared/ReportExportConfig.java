package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportExportConfig
 *  Information about the location where the run of a report is exported. 
**/
public class ReportExportConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("exportConfigType")
    public ReportExportConfigTypeEnum exportConfigType;
    public ReportExportConfig withExportConfigType(ReportExportConfigTypeEnum exportConfigType) {
        this.exportConfigType = exportConfigType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3Destination")
    public S3ReportExportConfig s3Destination;
    public ReportExportConfig withS3Destination(S3ReportExportConfig s3Destination) {
        this.s3Destination = s3Destination;
        return this;
    }
}