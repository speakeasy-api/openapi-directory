package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset4RequestBody {
    @SpeakeasyMetadata("form:name=carbonOffset")
    public String carbonOffset;
    public ConfirmCarbonOffset4RequestBody withCarbonOffset(String carbonOffset) {
        this.carbonOffset = carbonOffset;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactEmail")
    public String contactEmail;
    public ConfirmCarbonOffset4RequestBody withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactFirstName")
    public String contactFirstName;
    public ConfirmCarbonOffset4RequestBody withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactLastName")
    public String contactLastName;
    public ConfirmCarbonOffset4RequestBody withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmCarbonOffset4RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}