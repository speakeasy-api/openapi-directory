package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateOtaUpdateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsIotJobArn")
    public String awsIotJobArn;
    public CreateOtaUpdateResponse withAwsIotJobArn(String awsIotJobArn) {
        this.awsIotJobArn = awsIotJobArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsIotJobId")
    public String awsIotJobId;
    public CreateOtaUpdateResponse withAwsIotJobId(String awsIotJobId) {
        this.awsIotJobId = awsIotJobId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateArn")
    public String otaUpdateArn;
    public CreateOtaUpdateResponse withOtaUpdateArn(String otaUpdateArn) {
        this.otaUpdateArn = otaUpdateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateId")
    public String otaUpdateId;
    public CreateOtaUpdateResponse withOtaUpdateId(String otaUpdateId) {
        this.otaUpdateId = otaUpdateId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("otaUpdateStatus")
    public OtaUpdateStatusEnum otaUpdateStatus;
    public CreateOtaUpdateResponse withOtaUpdateStatus(OtaUpdateStatusEnum otaUpdateStatus) {
        this.otaUpdateStatus = otaUpdateStatus;
        return this;
    }
}