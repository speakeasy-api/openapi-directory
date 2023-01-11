package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsCloudMapServiceDiscovery
 * <p>An object that represents the Cloud Map service discovery information for your virtual node.</p> <note> <p>Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
public class AwsCloudMapServiceDiscovery {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public AwsCloudMapInstanceAttribute[] attributes;
    public AwsCloudMapServiceDiscovery withAttributes(AwsCloudMapInstanceAttribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonProperty("namespaceName")
    public String namespaceName;
    public AwsCloudMapServiceDiscovery withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
    @JsonProperty("serviceName")
    public String serviceName;
    public AwsCloudMapServiceDiscovery withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}