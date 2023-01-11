package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetDirectDebitsForMandateUuidDirectDebitsDirectDebit {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withCurrency(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDebitReference")
    public String directDebitReference;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withDirectDebitReference(String directDebitReference) {
        this.directDebitReference = directDebitReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDebitUuid")
    public String directDebitUuid;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withDirectDebitUuid(String directDebitUuid) {
        this.directDebitUuid = directDebitUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDDIC")
    public Boolean isDDIC;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withIsDdic(Boolean isDDIC) {
        this.isDDIC = isDDIC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandateUUid")
    public String mandateUUid;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withMandateUUid(String mandateUUid) {
        this.mandateUUid = mandateUUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorAlias")
    public String originatorAlias;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withOriginatorAlias(String originatorAlias) {
        this.originatorAlias = originatorAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorName")
    public String originatorName;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withOriginatorName(String originatorName) {
        this.originatorName = originatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorReference")
    public String originatorReference;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withOriginatorReference(String originatorReference) {
        this.originatorReference = originatorReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeRejectReason")
    public String schemeRejectReason;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withSchemeRejectReason(String schemeRejectReason) {
        this.schemeRejectReason = schemeRejectReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeRejectReasonCode")
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum schemeRejectReasonCode;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withSchemeRejectReasonCode(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitSchemeRejectReasonCodeEnum schemeRejectReasonCode) {
        this.schemeRejectReasonCode = schemeRejectReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum status;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withStatus(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetIcan")
    public Long targetIcan;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withTargetIcan(Long targetIcan) {
        this.targetIcan = targetIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPayeeId")
    public Long targetPayeeId;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withTargetPayeeId(Long targetPayeeId) {
        this.targetPayeeId = targetPayeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum type;
    public GetDirectDebitsForMandateUuidDirectDebitsDirectDebit withType(GetDirectDebitsForMandateUuidDirectDebitsDirectDebitTypeEnum type) {
        this.type = type;
        return this;
    }
}