package openapisdk.models.shared;



/**
 * EventDestination
 * <p>Contains information about the event destination that the specified email sending events will be published to.</p> <note> <p>When you create or update an event destination, you must provide one, and only one, destination. The destination can be Amazon CloudWatch, Amazon Kinesis Firehose or Amazon Simple Notification Service (Amazon SNS).</p> </note> <p>Event destinations are associated with configuration sets, which enable you to publish email sending events to Amazon CloudWatch, Amazon Kinesis Firehose, or Amazon Simple Notification Service (Amazon SNS). For information about using configuration sets, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html">Amazon SES Developer Guide</a>.</p>
**/
public class EventDestination {
    public CloudWatchDestination cloudWatchDestination;
    public EventDestination withCloudWatchDestination(CloudWatchDestination cloudWatchDestination) {
        this.cloudWatchDestination = cloudWatchDestination;
        return this;
    }
    public Boolean enabled;
    public EventDestination withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public KinesisFirehoseDestination kinesisFirehoseDestination;
    public EventDestination withKinesisFirehoseDestination(KinesisFirehoseDestination kinesisFirehoseDestination) {
        this.kinesisFirehoseDestination = kinesisFirehoseDestination;
        return this;
    }
    public EventTypeEnum[] matchingEventTypes;
    public EventDestination withMatchingEventTypes(EventTypeEnum[] matchingEventTypes) {
        this.matchingEventTypes = matchingEventTypes;
        return this;
    }
    public String name;
    public EventDestination withName(String name) {
        this.name = name;
        return this;
    }
    public SnsDestination snsDestination;
    public EventDestination withSnsDestination(SnsDestination snsDestination) {
        this.snsDestination = snsDestination;
        return this;
    }
}