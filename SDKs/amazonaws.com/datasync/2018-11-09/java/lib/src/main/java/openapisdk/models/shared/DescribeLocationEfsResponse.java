package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * DescribeLocationEfsResponse
 * DescribeLocationEfsResponse
**/
public class DescribeLocationEfsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeLocationEfsResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ec2Config")
    public Ec2Config ec2Config;
    public DescribeLocationEfsResponse withEc2Config(Ec2Config ec2Config) {
        this.ec2Config = ec2Config;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationEfsResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationUri")
    public String locationUri;
    public DescribeLocationEfsResponse withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
}