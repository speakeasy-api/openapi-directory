package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamoDbAction
 * <p>Defines an action to write to the Amazon DynamoDB table that you created. The standard action payload contains all the information about the detector model instance and the event that triggered the action. You can customize the <a href="https://docs.aws.amazon.com/iotevents/latest/apireference/API_Payload.html">payload</a>. One column of the DynamoDB table receives all attribute-value pairs in the payload that you specify.</p> <p>You must use expressions for all parameters in <code>DynamoDBAction</code>. The expressions accept literals, operators, functions, references, and substitution templates.</p> <p class="title"> <b>Examples</b> </p> <ul> <li> <p>For literal values, the expressions must contain single quotes. For example, the value for the <code>hashKeyType</code> parameter can be <code>'STRING'</code>.</p> </li> <li> <p>For references, you must specify either variables or input values. For example, the value for the <code>hashKeyField</code> parameter can be <code>$input.GreenhouseInput.name</code>.</p> </li> <li> <p>For a substitution template, you must use <code>${}</code>, and the template must be in single quotes. A substitution template can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>hashKeyValue</code> parameter uses a substitution template. </p> <p> <code>'${$input.GreenhouseInput.temperature * 6 / 5 + 32} in Fahrenheit'</code> </p> </li> <li> <p>For a string concatenation, you must use <code>+</code>. A string concatenation can also contain a combination of literals, operators, functions, references, and substitution templates.</p> <p>In the following example, the value for the <code>tableName</code> parameter uses a string concatenation. </p> <p> <code>'GreenhouseTemperatureTable ' + $input.GreenhouseInput.date</code> </p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-expressions.html">Expressions</a> in the <i>AWS IoT Events Developer Guide</i>.</p> <p>If the defined payload type is a string, <code>DynamoDBAction</code> writes non-JSON data to the DynamoDB table as binary data. The DynamoDB console displays the data as Base64-encoded text. The value for the <code>payloadField</code> parameter is <code>&lt;payload-field&gt;_raw</code>.</p>
**/
public class DynamoDbAction {
    @JsonProperty("hashKeyField")
    public String hashKeyField;
    public DynamoDbAction withHashKeyField(String hashKeyField) {
        this.hashKeyField = hashKeyField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hashKeyType")
    public String hashKeyType;
    public DynamoDbAction withHashKeyType(String hashKeyType) {
        this.hashKeyType = hashKeyType;
        return this;
    }
    @JsonProperty("hashKeyValue")
    public String hashKeyValue;
    public DynamoDbAction withHashKeyValue(String hashKeyValue) {
        this.hashKeyValue = hashKeyValue;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("operation")
    public String operation;
    public DynamoDbAction withOperation(String operation) {
        this.operation = operation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payload")
    public Payload payload;
    public DynamoDbAction withPayload(Payload payload) {
        this.payload = payload;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payloadField")
    public String payloadField;
    public DynamoDbAction withPayloadField(String payloadField) {
        this.payloadField = payloadField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rangeKeyField")
    public String rangeKeyField;
    public DynamoDbAction withRangeKeyField(String rangeKeyField) {
        this.rangeKeyField = rangeKeyField;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rangeKeyType")
    public String rangeKeyType;
    public DynamoDbAction withRangeKeyType(String rangeKeyType) {
        this.rangeKeyType = rangeKeyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rangeKeyValue")
    public String rangeKeyValue;
    public DynamoDbAction withRangeKeyValue(String rangeKeyValue) {
        this.rangeKeyValue = rangeKeyValue;
        return this;
    }
    @JsonProperty("tableName")
    public String tableName;
    public DynamoDbAction withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}