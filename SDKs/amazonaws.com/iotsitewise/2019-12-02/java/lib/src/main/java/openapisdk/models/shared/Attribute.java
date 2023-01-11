package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Attribute
 * Contains an asset attribute property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.
**/
public class Attribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultValue")
    public String defaultValue;
    public Attribute withDefaultValue(String defaultValue) {
        this.defaultValue = defaultValue;
        return this;
    }
}