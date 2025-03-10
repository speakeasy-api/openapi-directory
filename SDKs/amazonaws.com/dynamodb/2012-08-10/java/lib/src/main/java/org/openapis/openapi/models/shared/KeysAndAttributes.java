/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * KeysAndAttributes - &lt;p&gt;Represents a set of primary keys and, for each key, the attributes to retrieve from the table.&lt;/p&gt; &lt;p&gt;For each primary key, you must provide &lt;i&gt;all&lt;/i&gt; of the key attributes. For example, with a simple primary key, you only need to provide the partition key. For a composite primary key, you must provide &lt;i&gt;both&lt;/i&gt; the partition key and the sort key.&lt;/p&gt;
 */
public class KeysAndAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributesToGet")
    public String[] attributesToGet;

    public KeysAndAttributes withAttributesToGet(String[] attributesToGet) {
        this.attributesToGet = attributesToGet;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConsistentRead")
    public Boolean consistentRead;

    public KeysAndAttributes withConsistentRead(Boolean consistentRead) {
        this.consistentRead = consistentRead;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpressionAttributeNames")
    public java.util.Map<String, String> expressionAttributeNames;

    public KeysAndAttributes withExpressionAttributeNames(java.util.Map<String, String> expressionAttributeNames) {
        this.expressionAttributeNames = expressionAttributeNames;
        return this;
    }
    
    @JsonProperty("Keys")
    public java.util.Map<String, AttributeValue>[] keys;

    public KeysAndAttributes withKeys(java.util.Map<String, AttributeValue>[] keys) {
        this.keys = keys;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProjectionExpression")
    public String projectionExpression;

    public KeysAndAttributes withProjectionExpression(String projectionExpression) {
        this.projectionExpression = projectionExpression;
        return this;
    }
    
    public KeysAndAttributes(@JsonProperty("Keys") java.util.Map<String, AttributeValue>[] keys) {
        this.keys = keys;
  }
}
