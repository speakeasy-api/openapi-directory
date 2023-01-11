package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DynamoDbAction
 * <p>Describes an action to write to a DynamoDB table.</p> <p>The <code>tableName</code>, <code>hashKeyField</code>, and <code>rangeKeyField</code> values must match the values used when you created the table.</p> <p>The <code>hashKeyValue</code> and <code>rangeKeyvalue</code> fields use a substitution template syntax. These templates provide data at runtime. The syntax is as follows: ${<i>sql-expression</i>}.</p> <p>You can specify any valid expression in a WHERE or SELECT clause, including JSON properties, comparisons, calculations, and functions. For example, the following field uses the third level of the topic:</p> <p> <code>"hashKeyValue": "${topic(3)}"</code> </p> <p>The following field uses the timestamp:</p> <p> <code>"rangeKeyValue": "${timestamp()}"</code> </p>
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
    public DynamoKeyTypeEnum hashKeyType;
    public DynamoDbAction withHashKeyType(DynamoKeyTypeEnum hashKeyType) {
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
    public DynamoKeyTypeEnum rangeKeyType;
    public DynamoDbAction withRangeKeyType(DynamoKeyTypeEnum rangeKeyType) {
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
    @JsonProperty("roleArn")
    public String roleArn;
    public DynamoDbAction withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("tableName")
    public String tableName;
    public DynamoDbAction withTableName(String tableName) {
        this.tableName = tableName;
        return this;
    }
}