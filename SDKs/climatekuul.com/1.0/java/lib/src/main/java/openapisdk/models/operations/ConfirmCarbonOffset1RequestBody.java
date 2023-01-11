package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset1RequestBody {
    @SpeakeasyMetadata("form:name=carbonOffset")
    public String carbonOffset;
    public ConfirmCarbonOffset1RequestBody withCarbonOffset(String carbonOffset) {
        this.carbonOffset = carbonOffset;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactEmail")
    public String contactEmail;
    public ConfirmCarbonOffset1RequestBody withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactFirstName")
    public String contactFirstName;
    public ConfirmCarbonOffset1RequestBody withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactLastName")
    public String contactLastName;
    public ConfirmCarbonOffset1RequestBody withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmCarbonOffset1RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}