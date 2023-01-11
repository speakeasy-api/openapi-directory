package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Secret
 * <p>An object representing the secret to expose to your container. Secrets can be exposed to a container in the following ways:</p> <ul> <li> <p>To inject sensitive data into your containers as environment variables, use the <code>secrets</code> container definition parameter.</p> </li> <li> <p>To reference sensitive information in the log configuration of a container, use the <code>secretOptions</code> container definition parameter.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/specifying-sensitive-data.html">Specifying Sensitive Data</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
**/
public class Secret {
    @JsonProperty("name")
    public String name;
    public Secret withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("valueFrom")
    public String valueFrom;
    public Secret withValueFrom(String valueFrom) {
        this.valueFrom = valueFrom;
        return this;
    }
}