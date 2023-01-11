package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * SupportedFieldTypeDetails
 *  Contains details regarding all the supported <code>FieldTypes</code> and their corresponding <code>filterOperators</code> and <code>supportedValues</code>. 
**/
public class SupportedFieldTypeDetails {
    @JsonProperty("v1")
    public FieldTypeDetails v1;
    public SupportedFieldTypeDetails withV1(FieldTypeDetails v1) {
        this.v1 = v1;
        return this;
    }
}