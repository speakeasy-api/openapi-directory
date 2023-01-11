package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FormAttributes
 * Attributes of the form including it's included fields and css styles
**/
public class FormAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cssStyles")
    public String cssStyles;
    public FormAttributes withCssStyles(String cssStyles) {
        this.cssStyles = cssStyles;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("elements")
    public FormField[] elements;
    public FormAttributes withElements(FormField[] elements) {
        this.elements = elements;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formDescription")
    public String formDescription;
    public FormAttributes withFormDescription(String formDescription) {
        this.formDescription = formDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("submitButtonText")
    public String submitButtonText;
    public FormAttributes withSubmitButtonText(String submitButtonText) {
        this.submitButtonText = submitButtonText;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("successMessage")
    public String successMessage;
    public FormAttributes withSuccessMessage(String successMessage) {
        this.successMessage = successMessage;
        return this;
    }
}