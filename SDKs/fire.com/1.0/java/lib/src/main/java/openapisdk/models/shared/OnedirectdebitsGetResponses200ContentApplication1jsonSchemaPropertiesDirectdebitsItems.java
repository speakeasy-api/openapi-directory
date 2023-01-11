package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("amount")
    public Long amount;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withAmount(Long amount) {
        this.amount = amount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("currency")
    public OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withCurrency(OneaccountsGetResponses200ContentApplication1jsonSchemaPropertiesAccountsItemsPropertiesCurrency currency) {
        this.currency = currency;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("dateCreated")
    public OffsetDateTime dateCreated;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withDateCreated(OffsetDateTime dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDebitReference")
    public String directDebitReference;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withDirectDebitReference(String directDebitReference) {
        this.directDebitReference = directDebitReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("directDebitUuid")
    public String directDebitUuid;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withDirectDebitUuid(String directDebitUuid) {
        this.directDebitUuid = directDebitUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDDIC")
    public Boolean isDDIC;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withIsDdic(Boolean isDDIC) {
        this.isDDIC = isDDIC;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUpdated")
    public OffsetDateTime lastUpdated;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mandateUUid")
    public String mandateUUid;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withMandateUUid(String mandateUUid) {
        this.mandateUUid = mandateUUid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorAlias")
    public String originatorAlias;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withOriginatorAlias(String originatorAlias) {
        this.originatorAlias = originatorAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorName")
    public String originatorName;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withOriginatorName(String originatorName) {
        this.originatorName = originatorName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("originatorReference")
    public String originatorReference;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withOriginatorReference(String originatorReference) {
        this.originatorReference = originatorReference;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeRejectReason")
    public String schemeRejectReason;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withSchemeRejectReason(String schemeRejectReason) {
        this.schemeRejectReason = schemeRejectReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemeRejectReasonCode")
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum schemeRejectReasonCode;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withSchemeRejectReasonCode(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsSchemeRejectReasonCodeEnum schemeRejectReasonCode) {
        this.schemeRejectReasonCode = schemeRejectReasonCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum status;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withStatus(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetIcan")
    public Long targetIcan;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withTargetIcan(Long targetIcan) {
        this.targetIcan = targetIcan;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetPayeeId")
    public Long targetPayeeId;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withTargetPayeeId(Long targetPayeeId) {
        this.targetPayeeId = targetPayeeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum type;
    public OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItems withType(OnedirectdebitsGetResponses200ContentApplication1jsonSchemaPropertiesDirectdebitsItemsTypeEnum type) {
        this.type = type;
        return this;
    }
}