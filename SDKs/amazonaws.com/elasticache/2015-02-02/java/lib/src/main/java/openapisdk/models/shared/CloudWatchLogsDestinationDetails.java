package openapisdk.models.shared;



/**
 * CloudWatchLogsDestinationDetails
 * The configuration details of the CloudWatch Logs destination.
**/
public class CloudWatchLogsDestinationDetails {
    public String logGroup;
    public CloudWatchLogsDestinationDetails withLogGroup(String logGroup) {
        this.logGroup = logGroup;
        return this;
    }
}