package openapisdk.models.shared;



public class DescribeNotificationConfigurationsAnswer {
    public String nextToken;
    public DescribeNotificationConfigurationsAnswer withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public NotificationConfiguration[] notificationConfigurations;
    public DescribeNotificationConfigurationsAnswer withNotificationConfigurations(NotificationConfiguration[] notificationConfigurations) {
        this.notificationConfigurations = notificationConfigurations;
        return this;
    }
}