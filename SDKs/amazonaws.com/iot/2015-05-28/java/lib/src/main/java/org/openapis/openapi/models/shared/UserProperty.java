/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserProperty - A key-value pair that you define in the header. Both the key and the value are either literal strings or valid &lt;a href="https://docs.aws.amazon.com/iot/latest/developerguide/iot-substitution-templates.html"&gt;substitution templates&lt;/a&gt;.
 */
public class UserProperty {
    @JsonProperty("key")
    public String key;

    public UserProperty withKey(String key) {
        this.key = key;
        return this;
    }
    
    @JsonProperty("value")
    public String value;

    public UserProperty withValue(String value) {
        this.value = value;
        return this;
    }
    
    public UserProperty(@JsonProperty("key") String key, @JsonProperty("value") String value) {
        this.key = key;
        this.value = value;
  }
}
