package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DataPrivacy
 * By default, data stored by Amazon Lex is encrypted. The <code>DataPrivacy</code> structure provides settings that determine how Amazon Lex handles special cases of securing the data for your bot. 
**/
public class DataPrivacy {
    @JsonProperty("childDirected")
    public Boolean childDirected;
    public DataPrivacy withChildDirected(Boolean childDirected) {
        this.childDirected = childDirected;
        return this;
    }
}