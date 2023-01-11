package openapisdk.models.operations;



public class DeleteRateBasedRuleResponse {
    public String contentType;
    public DeleteRateBasedRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRateBasedRuleResponse deleteRateBasedRuleResponse;
    public DeleteRateBasedRuleResponse withDeleteRateBasedRuleResponse(openapisdk.models.shared.DeleteRateBasedRuleResponse deleteRateBasedRuleResponse) {
        this.deleteRateBasedRuleResponse = deleteRateBasedRuleResponse;
        return this;
    }
    public Long statusCode;
    public DeleteRateBasedRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteRateBasedRuleResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteRateBasedRuleResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteRateBasedRuleResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteRateBasedRuleResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteRateBasedRuleResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteRateBasedRuleResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
    public Object wafTagOperationException;
    public DeleteRateBasedRuleResponse withWafTagOperationException(Object wafTagOperationException) {
        this.wafTagOperationException = wafTagOperationException;
        return this;
    }
    public Object wafTagOperationInternalErrorException;
    public DeleteRateBasedRuleResponse withWafTagOperationInternalErrorException(Object wafTagOperationInternalErrorException) {
        this.wafTagOperationInternalErrorException = wafTagOperationInternalErrorException;
        return this;
    }
}