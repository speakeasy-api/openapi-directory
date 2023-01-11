package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SupportedEndpointType
 * Provides information about types of supported endpoints in response to a request by the <code>DescribeEndpointTypes</code> operation. This information includes the type of endpoint, the database engine name, and whether change data capture (CDC) is supported.
**/
public class SupportedEndpointType {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndpointType")
    public ReplicationEndpointTypeValueEnum endpointType;
    public SupportedEndpointType withEndpointType(ReplicationEndpointTypeValueEnum endpointType) {
        this.endpointType = endpointType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineDisplayName")
    public String engineDisplayName;
    public SupportedEndpointType withEngineDisplayName(String engineDisplayName) {
        this.engineDisplayName = engineDisplayName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineName")
    public String engineName;
    public SupportedEndpointType withEngineName(String engineName) {
        this.engineName = engineName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReplicationInstanceEngineMinimumVersion")
    public String replicationInstanceEngineMinimumVersion;
    public SupportedEndpointType withReplicationInstanceEngineMinimumVersion(String replicationInstanceEngineMinimumVersion) {
        this.replicationInstanceEngineMinimumVersion = replicationInstanceEngineMinimumVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportsCDC")
    public Boolean supportsCDC;
    public SupportedEndpointType withSupportsCdc(Boolean supportsCDC) {
        this.supportsCDC = supportsCDC;
        return this;
    }
}