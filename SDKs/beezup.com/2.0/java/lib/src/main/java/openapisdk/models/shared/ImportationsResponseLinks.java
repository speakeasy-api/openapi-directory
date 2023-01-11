package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportationsResponseLinks {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("self")
    public LinksImportationGetReportingsLink self;
    public ImportationsResponseLinks withSelf(LinksImportationGetReportingsLink self) {
        this.self = self;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start")
    public LinksImportationStartManualUpdateLink start;
    public ImportationsResponseLinks withStart(LinksImportationStartManualUpdateLink start) {
        this.start = start;
        return this;
    }
}