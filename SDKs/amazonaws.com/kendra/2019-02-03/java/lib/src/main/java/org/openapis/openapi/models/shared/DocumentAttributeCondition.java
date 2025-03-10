/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * DocumentAttributeCondition - &lt;p&gt;The condition used for the target document attribute or metadata field when ingesting documents into Amazon Kendra. You use this with &lt;a href="https://docs.aws.amazon.com/kendra/latest/dg/API_DocumentAttributeTarget.html"&gt;DocumentAttributeTarget to apply the condition&lt;/a&gt;.&lt;/p&gt; &lt;p&gt;For example, you can create the 'Department' target field and have it prefill department names associated with the documents based on information in the 'Source_URI' field. Set the condition that if the 'Source_URI' field contains 'financial' in its URI value, then prefill the target field 'Department' with the target value 'Finance' for the document.&lt;/p&gt; &lt;p&gt;Amazon Kendra cannot create a target field if it has not already been created as an index field. After you create your index field, you can create a document metadata field using &lt;code&gt;DocumentAttributeTarget&lt;/code&gt;. Amazon Kendra then will map your newly created metadata field to your index field.&lt;/p&gt;
 */
public class DocumentAttributeCondition {
    @JsonProperty("ConditionDocumentAttributeKey")
    public String conditionDocumentAttributeKey;

    public DocumentAttributeCondition withConditionDocumentAttributeKey(String conditionDocumentAttributeKey) {
        this.conditionDocumentAttributeKey = conditionDocumentAttributeKey;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConditionOnValue")
    public DocumentAttributeValue conditionOnValue;

    public DocumentAttributeCondition withConditionOnValue(DocumentAttributeValue conditionOnValue) {
        this.conditionOnValue = conditionOnValue;
        return this;
    }
    
    @JsonProperty("Operator")
    public ConditionOperatorEnum operator;

    public DocumentAttributeCondition withOperator(ConditionOperatorEnum operator) {
        this.operator = operator;
        return this;
    }
    
    public DocumentAttributeCondition(@JsonProperty("ConditionDocumentAttributeKey") String conditionDocumentAttributeKey, @JsonProperty("Operator") ConditionOperatorEnum operator) {
        this.conditionDocumentAttributeKey = conditionDocumentAttributeKey;
        this.operator = operator;
  }
}
