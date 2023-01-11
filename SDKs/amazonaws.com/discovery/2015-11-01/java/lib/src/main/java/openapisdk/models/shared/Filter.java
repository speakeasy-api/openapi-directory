package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Filter
 * <p>A filter that can use conditional operators.</p> <p>For more information about filters, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html">Querying Discovered Configuration Items</a> in the <i>AWS Application Discovery Service User Guide</i>. </p>
**/
public class Filter {
    @JsonProperty("condition")
    public String condition;
    public Filter withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Filter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public Filter withValues(String[] values) {
        this.values = values;
        return this;
    }
}