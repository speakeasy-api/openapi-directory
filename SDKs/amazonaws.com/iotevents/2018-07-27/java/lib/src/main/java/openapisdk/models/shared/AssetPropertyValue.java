package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetPropertyValue
 * <p>A structure that contains value information. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_AssetPropertyValue.html">AssetPropertyValue</a> in the <i>AWS IoT SiteWise API Reference</i>.</p> <p>You must use expressions for all parameters in <code>AssetPropertyValue</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>quality</code> parameter can be <code>'GOOD'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>quality</code> parameter can be <code>$input.TemperatureInput.sensorData.quality</code>.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
**/
public class AssetPropertyValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("quality")
    public String quality;
    public AssetPropertyValue withQuality(String quality) {
        this.quality = quality;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timestamp")
    public AssetPropertyTimestamp timestamp;
    public AssetPropertyValue withTimestamp(AssetPropertyTimestamp timestamp) {
        this.timestamp = timestamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public AssetPropertyVariant value;
    public AssetPropertyValue withValue(AssetPropertyVariant value) {
        this.value = value;
        return this;
    }
}