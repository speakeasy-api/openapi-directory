package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * <p>Provides details about one of the following actions that affects or that was taken on a resource:</p> <ul> <li> <p>A remote IP address issued an Amazon Web Services API call</p> </li> <li> <p>A DNS request was received</p> </li> <li> <p>A remote IP address attempted to connect to an EC2 instance</p> </li> <li> <p>A remote IP address attempted a port probe on an EC2 instance</p> </li> </ul>
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ActionType")
    public String actionType;
    public Action withActionType(String actionType) {
        this.actionType = actionType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AwsApiCallAction")
    public AwsApiCallAction awsApiCallAction;
    public Action withAwsApiCallAction(AwsApiCallAction awsApiCallAction) {
        this.awsApiCallAction = awsApiCallAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DnsRequestAction")
    public DnsRequestAction dnsRequestAction;
    public Action withDnsRequestAction(DnsRequestAction dnsRequestAction) {
        this.dnsRequestAction = dnsRequestAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkConnectionAction")
    public NetworkConnectionAction networkConnectionAction;
    public Action withNetworkConnectionAction(NetworkConnectionAction networkConnectionAction) {
        this.networkConnectionAction = networkConnectionAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PortProbeAction")
    public PortProbeAction portProbeAction;
    public Action withPortProbeAction(PortProbeAction portProbeAction) {
        this.portProbeAction = portProbeAction;
        return this;
    }
}