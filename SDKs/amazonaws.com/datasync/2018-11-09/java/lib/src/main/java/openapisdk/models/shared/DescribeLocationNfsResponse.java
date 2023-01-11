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
 * DescribeLocationNfsResponse
 * DescribeLocationNfsResponse
**/
public class DescribeLocationNfsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public DescribeLocationNfsResponse withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationArn")
    public String locationArn;
    public DescribeLocationNfsResponse withLocationArn(String locationArn) {
        this.locationArn = locationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LocationUri")
    public String locationUri;
    public DescribeLocationNfsResponse withLocationUri(String locationUri) {
        this.locationUri = locationUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MountOptions")
    public NfsMountOptions mountOptions;
    public DescribeLocationNfsResponse withMountOptions(NfsMountOptions mountOptions) {
        this.mountOptions = mountOptions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OnPremConfig")
    public OnPremConfig onPremConfig;
    public DescribeLocationNfsResponse withOnPremConfig(OnPremConfig onPremConfig) {
        this.onPremConfig = onPremConfig;
        return this;
    }
}