/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteItemInput {
    /**
     * Designates an attribute for a conditional modification. The &lt;code&gt;Expected&lt;/code&gt; parameter allows you to provide an attribute name, and whether or not Amazon DynamoDB should check to see if the attribute has a particular value before modifying it.
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Expected")
    public java.util.Map<String, ExpectedAttributeValue> expected;

    public DeleteItemInput withExpected(java.util.Map<String, ExpectedAttributeValue> expected) {
        this.expected = expected;
        return this;
    }
    
    /**
     * The primary key that uniquely identifies each item in a table. A primary key can be a one attribute (hash) primary key or a two attribute (hash-and-range) primary key.
     */
    @JsonProperty("Key")
    public Key key;

    public DeleteItemInput withKey(Key key) {
        this.key = key;
        return this;
    }
    
    /**
     * &lt;p&gt;Use this parameter if you want to get the attribute name-value pairs before or after they are modified. For &lt;code&gt;PUT&lt;/code&gt; operations, the possible parameter values are &lt;code&gt;NONE&lt;/code&gt; (default) or &lt;code&gt;ALL_OLD&lt;/code&gt;. For update operations, the possible parameter values are &lt;code&gt;NONE&lt;/code&gt; (default) or &lt;code&gt;ALL_OLD&lt;/code&gt;, &lt;code&gt;UPDATED_OLD&lt;/code&gt;, &lt;code&gt;ALL_NEW&lt;/code&gt; or &lt;code&gt;UPDATED_NEW&lt;/code&gt;.&lt;/p&gt; &lt;ul&gt; &lt;li&gt;&lt;code&gt;NONE&lt;/code&gt;: Nothing is returned.&lt;/li&gt; &lt;li&gt;&lt;code&gt;ALL_OLD&lt;/code&gt;: Returns the attributes of the item as they were before the operation.&lt;/li&gt; &lt;li&gt;&lt;code&gt;UPDATED_OLD&lt;/code&gt;: Returns the values of the updated attributes, only, as they were before the operation.&lt;/li&gt; &lt;li&gt;&lt;code&gt;ALL_NEW&lt;/code&gt;: Returns all the attributes and their new values after the operation.&lt;/li&gt; &lt;li&gt;&lt;code&gt;UPDATED_NEW&lt;/code&gt;: Returns the values of the updated attributes, only, as they are after the operation.&lt;/li&gt; &lt;/ul&gt;
     */
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReturnValues")
    public ReturnValueEnum returnValues;

    public DeleteItemInput withReturnValues(ReturnValueEnum returnValues) {
        this.returnValues = returnValues;
        return this;
    }
    
    @JsonProperty("TableName")
    public String tableName;

    public DeleteItemInput withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
    
    public DeleteItemInput(@JsonProperty("Key") Key key, @JsonProperty("TableName") String tableName) {
        this.key = key;
        this.tableName = tableName;
  }
}
