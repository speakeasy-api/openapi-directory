package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PatchTransactionRulesTransactionRuleIdPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=transactionRuleId")
    public String transactionRuleId;
    public PatchTransactionRulesTransactionRuleIdPathParams withTransactionRuleId(String transactionRuleId) {
        this.transactionRuleId = transactionRuleId;
        return this;
    }
}