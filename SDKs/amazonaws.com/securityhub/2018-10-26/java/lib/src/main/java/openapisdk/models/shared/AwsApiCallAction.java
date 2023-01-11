package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsApiCallAction
 * Provided if <code>ActionType</code> is <code>AWS_API_CALL</code>. It provides details about the API call that was detected.
**/
public class AwsApiCallAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AffectedResources")
    public java.util.Map<String, String> affectedResources;
    public AwsApiCallAction withAffectedResources(java.util.Map<String, String> affectedResources) {
        this.affectedResources = affectedResources;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Api")
    public String api;
    public AwsApiCallAction withApi(String api) {
        this.api = api;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CallerType")
    public String callerType;
    public AwsApiCallAction withCallerType(String callerType) {
        this.callerType = callerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DomainDetails")
    public AwsApiCallActionDomainDetails domainDetails;
    public AwsApiCallAction withDomainDetails(AwsApiCallActionDomainDetails domainDetails) {
        this.domainDetails = domainDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FirstSeen")
    public String firstSeen;
    public AwsApiCallAction withFirstSeen(String firstSeen) {
        this.firstSeen = firstSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastSeen")
    public String lastSeen;
    public AwsApiCallAction withLastSeen(String lastSeen) {
        this.lastSeen = lastSeen;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoteIpDetails")
    public ActionRemoteIpDetails remoteIpDetails;
    public AwsApiCallAction withRemoteIpDetails(ActionRemoteIpDetails remoteIpDetails) {
        this.remoteIpDetails = remoteIpDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceName")
    public String serviceName;
    public AwsApiCallAction withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
}