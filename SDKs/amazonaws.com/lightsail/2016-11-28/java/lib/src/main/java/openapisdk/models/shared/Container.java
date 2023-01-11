package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Container {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("command")
    public String[] command;
    public Container withCommand(String[] command) {
        this.command = command;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public java.util.Map<String, String> environment;
    public Container withEnvironment(java.util.Map<String, String> environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("image")
    public String image;
    public Container withImage(String image) {
        this.image = image;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ports")
    public java.util.Map<String, String> ports;
    public Container withPorts(java.util.Map<String, String> ports) {
        this.ports = ports;
        return this;
    }
}