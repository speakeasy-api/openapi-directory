package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * GetBlacklistReportsResponse
 * An object that contains information about blacklist events.
**/
public class GetBlacklistReportsResponse {
    @JsonProperty("BlacklistReport")
    public java.util.Map<String, BlacklistEntry[]> blacklistReport;
    public GetBlacklistReportsResponse withBlacklistReport(java.util.Map<String, BlacklistEntry[]> blacklistReport) {
        this.blacklistReport = blacklistReport;
        return this;
    }
}