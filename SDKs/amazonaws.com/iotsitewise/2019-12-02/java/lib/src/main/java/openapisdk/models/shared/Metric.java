package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Metric
 * <p>Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).</p> <p>The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a <i>root</i> metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p>
**/
public class Metric {
    @JsonProperty("expression")
    public String expression;
    public Metric withExpression(String expression) {
        this.expression = expression;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("processingConfig")
    public MetricProcessingConfig processingConfig;
    public Metric withProcessingConfig(MetricProcessingConfig processingConfig) {
        this.processingConfig = processingConfig;
        return this;
    }
    @JsonProperty("variables")
    public ExpressionVariable[] variables;
    public Metric withVariables(ExpressionVariable[] variables) {
        this.variables = variables;
        return this;
    }
    @JsonProperty("window")
    public MetricWindow window;
    public Metric withWindow(MetricWindow window) {
        this.window = window;
        return this;
    }
}