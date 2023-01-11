package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ActiveContext
 * A context is a variable that contains information about the current state of the conversation between a user and Amazon Lex. Context can be set automatically by Amazon Lex when an intent is fulfilled, or it can be set at runtime using the <code>PutContent</code>, <code>PutText</code>, or <code>PutSession</code> operation.
**/
public class ActiveContext {
    @JsonProperty("name")
    public String name;
    public ActiveContext withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("parameters")
    public java.util.Map<String, String> parameters;
    public ActiveContext withParameters(java.util.Map<String, String> parameters) {
        this.parameters = parameters;
        return this;
    }
    @JsonProperty("timeToLive")
    public ActiveContextTimeToLive timeToLive;
    public ActiveContext withTimeToLive(ActiveContextTimeToLive timeToLive) {
        this.timeToLive = timeToLive;
        return this;
    }
}