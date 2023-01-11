package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset5RequestBody {
    @SpeakeasyMetadata("form:name=carbonOffset")
    public String carbonOffset;
    public ConfirmCarbonOffset5RequestBody withCarbonOffset(String carbonOffset) {
        this.carbonOffset = carbonOffset;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactEmail")
    public String contactEmail;
    public ConfirmCarbonOffset5RequestBody withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactFirstName")
    public String contactFirstName;
    public ConfirmCarbonOffset5RequestBody withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactLastName")
    public String contactLastName;
    public ConfirmCarbonOffset5RequestBody withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmCarbonOffset5RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}