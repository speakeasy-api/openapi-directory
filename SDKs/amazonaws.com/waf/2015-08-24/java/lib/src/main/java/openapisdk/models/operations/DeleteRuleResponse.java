package openapisdk.models.operations;



public class DeleteRuleResponse {
    public String contentType;
    public DeleteRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRuleResponse deleteRuleResponse;
    public DeleteRuleResponse withDeleteRuleResponse(openapisdk.models.shared.DeleteRuleResponse deleteRuleResponse) {
        this.deleteRuleResponse = deleteRuleResponse;
        return this;
    }
    public Long statusCode;
    public DeleteRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object wafInternalErrorException;
    public DeleteRuleResponse withWafInternalErrorException(Object wafInternalErrorException) {
        this.wafInternalErrorException = wafInternalErrorException;
        return this;
    }
    public Object wafInvalidAccountException;
    public DeleteRuleResponse withWafInvalidAccountException(Object wafInvalidAccountException) {
        this.wafInvalidAccountException = wafInvalidAccountException;
        return this;
    }
    public Object wafNonEmptyEntityException;
    public DeleteRuleResponse withWafNonEmptyEntityException(Object wafNonEmptyEntityException) {
        this.wafNonEmptyEntityException = wafNonEmptyEntityException;
        return this;
    }
    public Object wafNonexistentItemException;
    public DeleteRuleResponse withWafNonexistentItemException(Object wafNonexistentItemException) {
        this.wafNonexistentItemException = wafNonexistentItemException;
        return this;
    }
    public Object wafReferencedItemException;
    public DeleteRuleResponse withWafReferencedItemException(Object wafReferencedItemException) {
        this.wafReferencedItemException = wafReferencedItemException;
        return this;
    }
    public Object wafStaleDataException;
    public DeleteRuleResponse withWafStaleDataException(Object wafStaleDataException) {
        this.wafStaleDataException = wafStaleDataException;
        return this;
    }
    public Object wafTagOperationException;
    public DeleteRuleResponse withWafTagOperationException(Object wafTagOperationException) {
        this.wafTagOperationException = wafTagOperationException;
        return this;
    }
    public Object wafTagOperationInternalErrorException;
    public DeleteRuleResponse withWafTagOperationInternalErrorException(Object wafTagOperationInternalErrorException) {
        this.wafTagOperationInternalErrorException = wafTagOperationInternalErrorException;
        return this;
    }
}