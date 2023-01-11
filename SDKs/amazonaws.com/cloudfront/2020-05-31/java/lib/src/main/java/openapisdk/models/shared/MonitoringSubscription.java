package openapisdk.models.shared;



/**
 * MonitoringSubscription
 * A monitoring subscription. This structure contains information about whether additional CloudWatch metrics are enabled for a given CloudFront distribution.
**/
public class MonitoringSubscription {
    public RealtimeMetricsSubscriptionConfig realtimeMetricsSubscriptionConfig;
    public MonitoringSubscription withRealtimeMetricsSubscriptionConfig(RealtimeMetricsSubscriptionConfig realtimeMetricsSubscriptionConfig) {
        this.realtimeMetricsSubscriptionConfig = realtimeMetricsSubscriptionConfig;
        return this;
    }
}