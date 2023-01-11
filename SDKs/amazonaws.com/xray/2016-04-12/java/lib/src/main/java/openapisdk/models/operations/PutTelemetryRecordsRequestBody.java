package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutTelemetryRecordsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EC2InstanceId")
    public String ec2InstanceId;
    public PutTelemetryRecordsRequestBody withEc2InstanceId(String ec2InstanceId) {
        this.ec2InstanceId = ec2InstanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Hostname")
    public String hostname;
    public PutTelemetryRecordsRequestBody withHostname(String hostname) {
        this.hostname = hostname;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public PutTelemetryRecordsRequestBody withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("TelemetryRecords")
    public openapisdk.models.shared.TelemetryRecord[] telemetryRecords;
    public PutTelemetryRecordsRequestBody withTelemetryRecords(openapisdk.models.shared.TelemetryRecord[] telemetryRecords) {
        this.telemetryRecords = telemetryRecords;
        return this;
    }
}