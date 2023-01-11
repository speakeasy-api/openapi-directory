package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DeviceFilter
 * <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to <code>ScheduleRun</code>. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to <code>ListDevices</code>. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
**/
public class DeviceFilter {
    @JsonProperty("attribute")
    public DeviceFilterAttributeEnum attribute;
    public DeviceFilter withAttribute(DeviceFilterAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @JsonProperty("operator")
    public RuleOperatorEnum operator;
    public DeviceFilter withOperator(RuleOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    @JsonProperty("values")
    public String[] values;
    public DeviceFilter withValues(String[] values) {
        this.values = values;
        return this;
    }
}