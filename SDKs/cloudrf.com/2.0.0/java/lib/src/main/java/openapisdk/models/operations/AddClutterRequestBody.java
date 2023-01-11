package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AddClutterRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("features")
    public openapisdk.models.shared.Feature[] features;
    public AddClutterRequestBody withFeatures(openapisdk.models.shared.Feature[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public AddClutterRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public AddClutterRequestBody withType(String type) {
        this.type = type;
        return this;
    }
}