package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * ElasticsearchAction
 * <p>Describes an action that writes data to an Amazon Elasticsearch Service domain.</p> <note> <p>This action is deprecated. Use the <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_OpenSearchAction.html">OpenSearch action</a> instead.</p> </note>
**/
public class ElasticsearchAction {
    @JsonProperty("endpoint")
    public String endpoint;
    public ElasticsearchAction withEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }
    @JsonProperty("id")
    public String id;
    public ElasticsearchAction withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("index")
    public String index;
    public ElasticsearchAction withIndex(String index) {
        this.index = index;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public ElasticsearchAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("type")
    public String type;
    public ElasticsearchAction withType(String type) {
        this.type = type;
        return this;
    }
}