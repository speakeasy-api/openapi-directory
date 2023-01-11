package openapisdk.models.shared;



/**
 * RealtimeLogConfigs
 * A list of real-time log configurations.
**/
public class RealtimeLogConfigs {
    public Boolean isTruncated;
    public RealtimeLogConfigs withIsTruncated(Boolean isTruncated) {
        this.isTruncated = isTruncated;
        return this;
    }
    public RealtimeLogConfig[] items;
    public RealtimeLogConfigs withItems(RealtimeLogConfig[] items) {
        this.items = items;
        return this;
    }
    public String marker;
    public RealtimeLogConfigs withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public Long maxItems;
    public RealtimeLogConfigs withMaxItems(Long maxItems) {
        this.maxItems = maxItems;
        return this;
    }
    public String nextMarker;
    public RealtimeLogConfigs withNextMarker(String nextMarker) {
        this.nextMarker = nextMarker;
        return this;
    }
}