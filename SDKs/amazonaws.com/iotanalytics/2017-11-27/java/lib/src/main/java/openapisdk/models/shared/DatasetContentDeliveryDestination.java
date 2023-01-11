package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DatasetContentDeliveryDestination
 * The destination to which dataset contents are delivered.
**/
public class DatasetContentDeliveryDestination {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iotEventsDestinationConfiguration")
    public IotEventsDestinationConfiguration iotEventsDestinationConfiguration;
    public DatasetContentDeliveryDestination withIotEventsDestinationConfiguration(IotEventsDestinationConfiguration iotEventsDestinationConfiguration) {
        this.iotEventsDestinationConfiguration = iotEventsDestinationConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("s3DestinationConfiguration")
    public S3DestinationConfiguration s3DestinationConfiguration;
    public DatasetContentDeliveryDestination withS3DestinationConfiguration(S3DestinationConfiguration s3DestinationConfiguration) {
        this.s3DestinationConfiguration = s3DestinationConfiguration;
        return this;
    }
}