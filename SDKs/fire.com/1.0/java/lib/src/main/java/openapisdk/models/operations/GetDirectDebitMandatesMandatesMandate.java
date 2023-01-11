package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class GetDirectDebitMandatesMandatesMandate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("alias")
    public String alias;
    public GetDirectDebitMandatesMandatesMandate withAlias(String alias) {
        this.alias = alias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public GetDirectDebitMandatesMandatesMandate withCurrency(openapisdk.models.shared.OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCancelled")
    public OffsetDateTime dateCancelled;
    public GetDirectDebitMandatesMandatesMandate withDateCancelled(OffsetDateTime dateCancelled) {
        this.dateCancelled = dateCancelled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCompleted")
    public OffsetDateTime dateCompleted;
    public GetDirectDebitMandatesMandatesMandate withDateCompleted(OffsetDateTime dateCompleted) {
        this.dateCompleted = dateCompleted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public GetDirectDebitMandatesMandatesMandate withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fireRejectionReason")
    public GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum fireRejectionReason;
    public GetDirectDebitMandatesMandatesMandate withFireRejectionReason(GetDirectDebitMandatesMandatesMandateFireRejectionReasonEnum fireRejectionReason) {
        this.fireRejectionReason = fireRejectionReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public GetDirectDebitMandatesMandatesMandate withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("latestDirectDebitAmount")
    public Long latestDirectDebitAmount;
    public GetDirectDebitMandatesMandatesMandate withLatestDirectDebitAmount(Long latestDirectDebitAmount) {
        this.latestDirectDebitAmount = latestDirectDebitAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("latestDirectDebitDate")
    public OffsetDateTime latestDirectDebitDate;
    public GetDirectDebitMandatesMandatesMandate withLatestDirectDebitDate(OffsetDateTime latestDirectDebitDate) {
        this.latestDirectDebitDate = latestDirectDebitDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandateReference")
    public String mandateReference;
    public GetDirectDebitMandatesMandatesMandate withMandateReference(String mandateReference) {
        this.mandateReference = mandateReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandateUuid")
    public String mandateUuid;
    public GetDirectDebitMandatesMandatesMandate withMandateUuid(String mandateUuid) {
        this.mandateUuid = mandateUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numberOfDirectDebitCollected")
    public Long numberOfDirectDebitCollected;
    public GetDirectDebitMandatesMandatesMandate withNumberOfDirectDebitCollected(Long numberOfDirectDebitCollected) {
        this.numberOfDirectDebitCollected = numberOfDirectDebitCollected;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorAlias")
    public String originatorAlias;
    public GetDirectDebitMandatesMandatesMandate withOriginatorAlias(String originatorAlias) {
        this.originatorAlias = originatorAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorLogoUrlLarge")
    public String originatorLogoUrlLarge;
    public GetDirectDebitMandatesMandatesMandate withOriginatorLogoUrlLarge(String originatorLogoUrlLarge) {
        this.originatorLogoUrlLarge = originatorLogoUrlLarge;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorLogoUrlSmall")
    public String originatorLogoUrlSmall;
    public GetDirectDebitMandatesMandatesMandate withOriginatorLogoUrlSmall(String originatorLogoUrlSmall) {
        this.originatorLogoUrlSmall = originatorLogoUrlSmall;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorName")
    public String originatorName;
    public GetDirectDebitMandatesMandatesMandate withOriginatorName(String originatorName) {
        this.originatorName = originatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorReference")
    public String originatorReference;
    public GetDirectDebitMandatesMandatesMandate withOriginatorReference(String originatorReference) {
        this.originatorReference = originatorReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeCancelReason")
    public String schemeCancelReason;
    public GetDirectDebitMandatesMandatesMandate withSchemeCancelReason(String schemeCancelReason) {
        this.schemeCancelReason = schemeCancelReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeCancelReasonCode")
    public String schemeCancelReasonCode;
    public GetDirectDebitMandatesMandatesMandate withSchemeCancelReasonCode(String schemeCancelReasonCode) {
        this.schemeCancelReasonCode = schemeCancelReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public GetDirectDebitMandatesMandatesMandateStatusEnum status;
    public GetDirectDebitMandatesMandatesMandate withStatus(GetDirectDebitMandatesMandatesMandateStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetIcan")
    public Long targetIcan;
    public GetDirectDebitMandatesMandatesMandate withTargetIcan(Long targetIcan) {
        this.targetIcan = targetIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("valueOfDirectDebitCollected")
    public Long valueOfDirectDebitCollected;
    public GetDirectDebitMandatesMandatesMandate withValueOfDirectDebitCollected(Long valueOfDirectDebitCollected) {
        this.valueOfDirectDebitCollected = valueOfDirectDebitCollected;
        return this;
    }
}