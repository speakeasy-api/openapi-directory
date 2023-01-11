package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffsetRequestBody {
    @SpeakeasyMetadata("form:name=carbonOffset")
    public String carbonOffset;
    public ConfirmCarbonOffsetRequestBody withCarbonOffset(String carbonOffset) {
        this.carbonOffset = carbonOffset;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactEmail")
    public String contactEmail;
    public ConfirmCarbonOffsetRequestBody withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactFirstName")
    public String contactFirstName;
    public ConfirmCarbonOffsetRequestBody withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactLastName")
    public String contactLastName;
    public ConfirmCarbonOffsetRequestBody withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmCarbonOffsetRequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}