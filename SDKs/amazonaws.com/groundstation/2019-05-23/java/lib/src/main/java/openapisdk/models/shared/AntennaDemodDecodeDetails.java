package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AntennaDemodDecodeDetails
 * Details about an antenna demod decode <code>Config</code> used in a contact.
**/
public class AntennaDemodDecodeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("outputNode")
    public String outputNode;
    public AntennaDemodDecodeDetails withOutputNode(String outputNode) {
        this.outputNode = outputNode;
        return this;
    }
}