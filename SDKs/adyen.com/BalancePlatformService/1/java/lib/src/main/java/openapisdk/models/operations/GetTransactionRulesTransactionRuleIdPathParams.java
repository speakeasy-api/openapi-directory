package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionRulesTransactionRuleIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionRuleId")
    public String transactionRuleId;
    public GetTransactionRulesTransactionRuleIdPathParams withTransactionRuleId(String transactionRuleId) {
        this.transactionRuleId = transactionRuleId;
        return this;
    }
}