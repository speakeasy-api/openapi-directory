package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFormByIdUpdateFormByIdRequestBody
 * CSS Styles of the form.
**/
public class UpdateFormByIdUpdateFormByIdRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cssStyles")
    public String cssStyles;
    public UpdateFormByIdUpdateFormByIdRequestBody withCssStyles(String cssStyles) {
        this.cssStyles = cssStyles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public UpdateFormByIdUpdateFormByIdRequestBodyElements[] elements;
    public UpdateFormByIdUpdateFormByIdRequestBody withElements(UpdateFormByIdUpdateFormByIdRequestBodyElements[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formDescription")
    public String formDescription;
    public UpdateFormByIdUpdateFormByIdRequestBody withFormDescription(String formDescription) {
        this.formDescription = formDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submitButtonText")
    public String submitButtonText;
    public UpdateFormByIdUpdateFormByIdRequestBody withSubmitButtonText(String submitButtonText) {
        this.submitButtonText = submitButtonText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successMessage")
    public String successMessage;
    public UpdateFormByIdUpdateFormByIdRequestBody withSuccessMessage(String successMessage) {
        this.successMessage = successMessage;
        return this;
    }
}