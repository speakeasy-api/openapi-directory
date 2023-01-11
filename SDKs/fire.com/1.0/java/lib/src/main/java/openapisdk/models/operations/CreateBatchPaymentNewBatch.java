package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateBatchPaymentNewBatch {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("batchName")
    public String batchName;
    public CreateBatchPaymentNewBatch withBatchName(String batchName) {
        this.batchName = batchName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("callBackUrl")
    public String callBackUrl;
    public CreateBatchPaymentNewBatch withCallBackUrl(String callBackUrl) {
        this.callBackUrl = callBackUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public String currency;
    public CreateBatchPaymentNewBatch withCurrency(String currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobNumber")
    public String jobNumber;
    public CreateBatchPaymentNewBatch withJobNumber(String jobNumber) {
        this.jobNumber = jobNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public CreateBatchPaymentNewBatchTypeEnum type;
    public CreateBatchPaymentNewBatch withType(CreateBatchPaymentNewBatchTypeEnum type) {
        this.type = type;
        return this;
    }
}