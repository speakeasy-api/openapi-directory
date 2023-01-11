package openapisdk.models.shared;



/**
 * KinesisFirehoseDestinationDetails
 * The configuration details of the Kinesis Data Firehose destination.
**/
public class KinesisFirehoseDestinationDetails {
    public String deliveryStream;
    public KinesisFirehoseDestinationDetails withDeliveryStream(String deliveryStream) {
        this.deliveryStream = deliveryStream;
        return this;
    }
}