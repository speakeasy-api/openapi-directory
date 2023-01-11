package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateBotRequestBodyDataPrivacy
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
**/
public class CreateBotRequestBodyDataPrivacy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("childDirected")
    public Boolean childDirected;
    public CreateBotRequestBodyDataPrivacy withChildDirected(Boolean childDirected) {
        this.childDirected = childDirected;
        return this;
    }
}