package openapisdk.models.shared;



/**
 * RealtimeMetricsSubscriptionConfig
 * A subscription configuration for additional CloudWatch metrics.
**/
public class RealtimeMetricsSubscriptionConfig {
    public RealtimeMetricsSubscriptionStatusEnum realtimeMetricsSubscriptionStatus;
    public RealtimeMetricsSubscriptionConfig withRealtimeMetricsSubscriptionStatus(RealtimeMetricsSubscriptionStatusEnum realtimeMetricsSubscriptionStatus) {
        this.realtimeMetricsSubscriptionStatus = realtimeMetricsSubscriptionStatus;
        return this;
    }
}