package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportMetadatas
 * This type defines the metadata used by the all report types.
**/
public class ReportMetadatas {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("reportMetadata")
    public ReportMetadata[] reportMetadata;
    public ReportMetadatas withReportMetadata(ReportMetadata[] reportMetadata) {
        this.reportMetadata = reportMetadata;
        return this;
    }
}