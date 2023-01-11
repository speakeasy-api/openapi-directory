package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * HitLayoutParameter
 *  The HITLayoutParameter data structure defines parameter values used with a HITLayout. A HITLayout is a reusable Amazon Mechanical Turk project template used to provide Human Intelligence Task (HIT) question data for CreateHIT. 
**/
public class HitLayoutParameter {
    @JsonProperty("Name")
    public String name;
    public HitLayoutParameter withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Value")
    public String value;
    public HitLayoutParameter withValue(String value) {
        this.value = value;
        return this;
    }
}