package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RunCommandTarget
 * Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this key may specify multiple values.
**/
public class RunCommandTarget {
    @JsonProperty("Key")
    public String key;
    public RunCommandTarget withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Values")
    public String[] values;
    public RunCommandTarget withValues(String[] values) {
        this.values = values;
        return this;
    }
}