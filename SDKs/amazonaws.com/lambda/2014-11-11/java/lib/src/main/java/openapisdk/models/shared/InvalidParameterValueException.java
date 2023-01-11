package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InvalidParameterValueException
 * One of the parameters in the request is invalid. For example, if you provided an IAM role for AWS Lambda to assume in the <code>UploadFunction</code> or the <code>UpdateFunctionConfiguration</code> API, that AWS Lambda is unable to assume you will get this exception. 
**/
public class InvalidParameterValueException {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public InvalidParameterValueException withType(String type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("message")
    public String message;
    public InvalidParameterValueException withMessage(String message) {
        this.message = message;
        return this;
    }
}