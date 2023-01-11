package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ConfirmTopicRuleDestinationPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=confirmationToken")
    public String confirmationToken;
    public ConfirmTopicRuleDestinationPathParams withConfirmationToken(String confirmationToken) {
        this.confirmationToken = confirmationToken;
        return this;
    }
}