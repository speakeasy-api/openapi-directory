package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportFilter
 *  A filter used to return reports with the status specified by the input <code>status</code> parameter. 
**/
public class ReportFilter {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ReportStatusTypeEnum status;
    public ReportFilter withStatus(ReportStatusTypeEnum status) {
        this.status = status;
        return this;
    }
}