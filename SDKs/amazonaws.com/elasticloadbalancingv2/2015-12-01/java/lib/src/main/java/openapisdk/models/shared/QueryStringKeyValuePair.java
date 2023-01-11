package openapisdk.models.shared;



/**
 * QueryStringKeyValuePair
 * Information about a key/value pair.
**/
public class QueryStringKeyValuePair {
    public String key;
    public QueryStringKeyValuePair withKey(String key) {
        this.key = key;
        return this;
    }
    public String value;
    public QueryStringKeyValuePair withValue(String value) {
        this.value = value;
        return this;
    }
}