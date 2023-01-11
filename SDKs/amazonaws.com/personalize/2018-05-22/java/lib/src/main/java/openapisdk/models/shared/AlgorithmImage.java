package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AlgorithmImage
 * Describes an algorithm image.
**/
public class AlgorithmImage {
    @JsonProperty("dockerURI")
    public String dockerURI;
    public AlgorithmImage withDockerUri(String dockerURI) {
        this.dockerURI = dockerURI;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AlgorithmImage withName(String name) {
        this.name = name;
        return this;
    }
}