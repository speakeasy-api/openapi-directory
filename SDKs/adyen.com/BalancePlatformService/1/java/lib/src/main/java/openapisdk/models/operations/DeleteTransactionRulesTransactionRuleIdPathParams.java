package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteTransactionRulesTransactionRuleIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionRuleId")
    public String transactionRuleId;
    public DeleteTransactionRulesTransactionRuleIdPathParams withTransactionRuleId(String transactionRuleId) {
        this.transactionRuleId = transactionRuleId;
        return this;
    }
}