package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmCarbonOffset3RequestBody {
    @SpeakeasyMetadata("form:name=carbonOffset")
    public String carbonOffset;
    public ConfirmCarbonOffset3RequestBody withCarbonOffset(String carbonOffset) {
        this.carbonOffset = carbonOffset;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactEmail")
    public String contactEmail;
    public ConfirmCarbonOffset3RequestBody withContactEmail(String contactEmail) {
        this.contactEmail = contactEmail;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactFirstName")
    public String contactFirstName;
    public ConfirmCarbonOffset3RequestBody withContactFirstName(String contactFirstName) {
        this.contactFirstName = contactFirstName;
        return this;
    }
    @SpeakeasyMetadata("form:name=contactLastName")
    public String contactLastName;
    public ConfirmCarbonOffset3RequestBody withContactLastName(String contactLastName) {
        this.contactLastName = contactLastName;
        return this;
    }
    @SpeakeasyMetadata("form:name=transaction_id")
    public String transactionId;
    public ConfirmCarbonOffset3RequestBody withTransactionId(String transactionId) {
        this.transactionId = transactionId;
        return this;
    }
}