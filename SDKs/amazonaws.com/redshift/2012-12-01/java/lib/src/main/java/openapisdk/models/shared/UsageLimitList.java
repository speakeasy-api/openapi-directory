package openapisdk.models.shared;



public class UsageLimitList {
    public String marker;
    public UsageLimitList withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public UsageLimit[] usageLimits;
    public UsageLimitList withUsageLimits(UsageLimit[] usageLimits) {
        this.usageLimits = usageLimits;
        return this;
    }
}