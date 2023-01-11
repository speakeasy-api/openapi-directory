package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RepublishAction
 * Describes an action to republish to another topic.
**/
public class RepublishAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("qos")
    public Long qos;
    public RepublishAction withQos(Long qos) {
        this.qos = qos;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public RepublishAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("topic")
    public String topic;
    public RepublishAction withTopic(String topic) {
        this.topic = topic;
        return this;
    }
}