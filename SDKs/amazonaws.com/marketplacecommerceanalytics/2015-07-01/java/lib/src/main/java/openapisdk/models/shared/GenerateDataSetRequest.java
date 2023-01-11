package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * GenerateDataSetRequest
 * Container for the parameters to the GenerateDataSet operation.
**/
public class GenerateDataSetRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("customerDefinedValues")
    public java.util.Map<String, String> customerDefinedValues;
    public GenerateDataSetRequest withCustomerDefinedValues(java.util.Map<String, String> customerDefinedValues) {
        this.customerDefinedValues = customerDefinedValues;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("dataSetPublicationDate")
    public OffsetDateTime dataSetPublicationDate;
    public GenerateDataSetRequest withDataSetPublicationDate(OffsetDateTime dataSetPublicationDate) {
        this.dataSetPublicationDate = dataSetPublicationDate;
        return this;
    }
    @JsonProperty("dataSetType")
    public DataSetTypeEnum dataSetType;
    public GenerateDataSetRequest withDataSetType(DataSetTypeEnum dataSetType) {
        this.dataSetType = dataSetType;
        return this;
    }
    @JsonProperty("destinationS3BucketName")
    public String destinationS3BucketName;
    public GenerateDataSetRequest withDestinationS3BucketName(String destinationS3BucketName) {
        this.destinationS3BucketName = destinationS3BucketName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("destinationS3Prefix")
    public String destinationS3Prefix;
    public GenerateDataSetRequest withDestinationS3Prefix(String destinationS3Prefix) {
        this.destinationS3Prefix = destinationS3Prefix;
        return this;
    }
    @JsonProperty("roleNameArn")
    public String roleNameArn;
    public GenerateDataSetRequest withRoleNameArn(String roleNameArn) {
        this.roleNameArn = roleNameArn;
        return this;
    }
    @JsonProperty("snsTopicArn")
    public String snsTopicArn;
    public GenerateDataSetRequest withSnsTopicArn(String snsTopicArn) {
        this.snsTopicArn = snsTopicArn;
        return this;
    }
}