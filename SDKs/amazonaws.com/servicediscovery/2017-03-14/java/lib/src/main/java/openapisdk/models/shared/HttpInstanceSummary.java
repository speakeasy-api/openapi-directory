package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * HttpInstanceSummary
 * In a response to a <a href="https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html">DiscoverInstances</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.
**/
public class HttpInstanceSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public java.util.Map<String, String> attributes;
    public HttpInstanceSummary withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthStatus")
    public HealthStatusEnum healthStatus;
    public HttpInstanceSummary withHealthStatus(HealthStatusEnum healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public HttpInstanceSummary withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NamespaceName")
    public String namespaceName;
    public HttpInstanceSummary withNamespaceName(String namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public String serviceName;
    public HttpInstanceSummary withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}