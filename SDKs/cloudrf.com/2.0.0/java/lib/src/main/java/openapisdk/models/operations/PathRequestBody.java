package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PathRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("antenna")
    public openapisdk.models.shared.Antenna antenna;
    public PathRequestBody withAntenna(openapisdk.models.shared.Antenna antenna) {
        this.antenna = antenna;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environment")
    public openapisdk.models.shared.Environment environment;
    public PathRequestBody withEnvironment(openapisdk.models.shared.Environment environment) {
        this.environment = environment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("model")
    public openapisdk.models.shared.Model model;
    public PathRequestBody withModel(openapisdk.models.shared.Model model) {
        this.model = model;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("network")
    public String network;
    public PathRequestBody withNetwork(String network) {
        this.network = network;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("output")
    public openapisdk.models.shared.Output output;
    public PathRequestBody withOutput(openapisdk.models.shared.Output output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("receiver")
    public openapisdk.models.shared.Receiver receiver;
    public PathRequestBody withReceiver(openapisdk.models.shared.Receiver receiver) {
        this.receiver = receiver;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("site")
    public String site;
    public PathRequestBody withSite(String site) {
        this.site = site;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("transmitter")
    public openapisdk.models.shared.Transmitter transmitter;
    public PathRequestBody withTransmitter(openapisdk.models.shared.Transmitter transmitter) {
        this.transmitter = transmitter;
        return this;
    }
}