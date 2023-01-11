package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FieldResult
 * A pairing target field and actual value read from form
**/
public class FieldResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FieldValues")
    public OcrPhotoTextElement[] fieldValues;
    public FieldResult withFieldValues(OcrPhotoTextElement[] fieldValues) {
        this.fieldValues = fieldValues;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetField")
    public FormFieldDefinition targetField;
    public FieldResult withTargetField(FormFieldDefinition targetField) {
        this.targetField = targetField;
        return this;
    }
}