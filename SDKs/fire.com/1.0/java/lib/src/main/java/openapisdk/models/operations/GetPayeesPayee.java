package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetPayeesPayee {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountHolderName")
    public String accountHolderName;
    public GetPayeesPayee withAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountName")
    public String accountName;
    public GetPayeesPayee withAccountName(String accountName) {
        this.accountName = accountName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accountNumber")
    public String accountNumber;
    public GetPayeesPayee withAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("bic")
    public String bic;
    public GetPayeesPayee withBic(String bic) {
        this.bic = bic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public GetPayeesPayeeCreatedByEnum createdBy;
    public GetPayeesPayee withCreatedBy(GetPayeesPayeeCreatedByEnum createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public GetPayeesPayee withCurrency(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public GetPayeesPayee withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iban")
    public String iban;
    public GetPayeesPayee withIban(String iban) {
        this.iban = iban;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public GetPayeesPayee withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nsc")
    public String nsc;
    public GetPayeesPayee withNsc(String nsc) {
        this.nsc = nsc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetPayeesPayeeStatusEnum status;
    public GetPayeesPayee withStatus(GetPayeesPayeeStatusEnum status) {
        this.status = status;
        return this;
    }
}