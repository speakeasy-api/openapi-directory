package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConnectorOperator
 * The operation to be performed on the provided source fields.
**/
public class ConnectorOperator {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Marketo")
    public MarketoConnectorOperatorEnum marketo;
    public ConnectorOperator withMarketo(MarketoConnectorOperatorEnum marketo) {
        this.marketo = marketo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3")
    public S3ConnectorOperatorEnum s3;
    public ConnectorOperator withS3(S3ConnectorOperatorEnum s3) {
        this.s3 = s3;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Salesforce")
    public SalesforceConnectorOperatorEnum salesforce;
    public ConnectorOperator withSalesforce(SalesforceConnectorOperatorEnum salesforce) {
        this.salesforce = salesforce;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceNow")
    public ServiceNowConnectorOperatorEnum serviceNow;
    public ConnectorOperator withServiceNow(ServiceNowConnectorOperatorEnum serviceNow) {
        this.serviceNow = serviceNow;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Zendesk")
    public ZendeskConnectorOperatorEnum zendesk;
    public ConnectorOperator withZendesk(ZendeskConnectorOperatorEnum zendesk) {
        this.zendesk = zendesk;
        return this;
    }
}