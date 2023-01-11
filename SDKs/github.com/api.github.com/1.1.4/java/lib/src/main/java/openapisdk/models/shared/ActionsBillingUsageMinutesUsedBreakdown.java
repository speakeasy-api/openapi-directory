package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsBillingUsageMinutesUsedBreakdown {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MACOS")
    public Long macos;
    public ActionsBillingUsageMinutesUsedBreakdown withMacos(Long macos) {
        this.macos = macos;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UBUNTU")
    public Long ubuntu;
    public ActionsBillingUsageMinutesUsedBreakdown withUbuntu(Long ubuntu) {
        this.ubuntu = ubuntu;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WINDOWS")
    public Long windows;
    public ActionsBillingUsageMinutesUsedBreakdown withWindows(Long windows) {
        this.windows = windows;
        return this;
    }
}