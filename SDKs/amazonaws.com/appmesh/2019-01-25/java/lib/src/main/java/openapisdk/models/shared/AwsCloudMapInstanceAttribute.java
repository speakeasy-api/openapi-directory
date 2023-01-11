package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AwsCloudMapInstanceAttribute
 * <p>An object that represents the Cloud Map attribute information for your virtual node.</p> <note> <p>AWS Cloud Map is not available in the eu-south-1 Region.</p> </note>
**/
public class AwsCloudMapInstanceAttribute {
    @JsonProperty("key")
    public String key;
    public AwsCloudMapInstanceAttribute withKey(String key) {
        this.key = key;
        return this;
    }
    @JsonProperty("value")
    public String value;
    public AwsCloudMapInstanceAttribute withValue(String value) {
        this.value = value;
        return this;
    }
}