package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ExportFilter
 * Used to select which agent's data is to be exported. A single agent ID may be selected for export using the <a href="http://docs.aws.amazon.com/application-discovery/latest/APIReference/API_StartExportTask.html">StartExportTask</a> action.
**/
public class ExportFilter {
    @JsonProperty("condition")
    public String condition;
    public ExportFilter withCondition(String condition) {
        this.condition = condition;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ExportFilter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public ExportFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}