package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KinesisFirehoseDestination
 * An object that defines an Amazon Kinesis Data Firehose destination for email events. You can use Amazon Kinesis Data Firehose to stream data to other services, such as Amazon S3 and Amazon Redshift.
**/
public class KinesisFirehoseDestination {
    @JsonProperty("DeliveryStreamArn")
    public String deliveryStreamArn;
    public KinesisFirehoseDestination withDeliveryStreamArn(String deliveryStreamArn) {
        this.deliveryStreamArn = deliveryStreamArn;
        return this;
    }
    @JsonProperty("IamRoleArn")
    public String iamRoleArn;
    public KinesisFirehoseDestination withIamRoleArn(String iamRoleArn) {
        this.iamRoleArn = iamRoleArn;
        return this;
    }
}