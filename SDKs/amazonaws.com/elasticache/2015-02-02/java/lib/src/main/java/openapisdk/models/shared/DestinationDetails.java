package openapisdk.models.shared;



/**
 * DestinationDetails
 * Configuration details of either a CloudWatch Logs destination or Kinesis Data Firehose destination.
**/
public class DestinationDetails {
    public CloudWatchLogsDestinationDetails cloudWatchLogsDetails;
    public DestinationDetails withCloudWatchLogsDetails(CloudWatchLogsDestinationDetails cloudWatchLogsDetails) {
        this.cloudWatchLogsDetails = cloudWatchLogsDetails;
        return this;
    }
    public KinesisFirehoseDestinationDetails kinesisFirehoseDetails;
    public DestinationDetails withKinesisFirehoseDetails(KinesisFirehoseDestinationDetails kinesisFirehoseDetails) {
        this.kinesisFirehoseDetails = kinesisFirehoseDetails;
        return this;
    }
}