package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendCommandRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbortTransaction")
    public java.util.Map<String, Object> abortTransaction;
    public SendCommandRequest withAbortTransaction(java.util.Map<String, Object> abortTransaction) {
        this.abortTransaction = abortTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommitTransaction")
    public CommitTransactionRequest commitTransaction;
    public SendCommandRequest withCommitTransaction(CommitTransactionRequest commitTransaction) {
        this.commitTransaction = commitTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndSession")
    public java.util.Map<String, Object> endSession;
    public SendCommandRequest withEndSession(java.util.Map<String, Object> endSession) {
        this.endSession = endSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecuteStatement")
    public ExecuteStatementRequest executeStatement;
    public SendCommandRequest withExecuteStatement(ExecuteStatementRequest executeStatement) {
        this.executeStatement = executeStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FetchPage")
    public FetchPageRequest fetchPage;
    public SendCommandRequest withFetchPage(FetchPageRequest fetchPage) {
        this.fetchPage = fetchPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SessionToken")
    public String sessionToken;
    public SendCommandRequest withSessionToken(String sessionToken) {
        this.sessionToken = sessionToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartSession")
    public StartSessionRequest startSession;
    public SendCommandRequest withStartSession(StartSessionRequest startSession) {
        this.startSession = startSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTransaction")
    public java.util.Map<String, Object> startTransaction;
    public SendCommandRequest withStartTransaction(java.util.Map<String, Object> startTransaction) {
        this.startTransaction = startTransaction;
        return this;
    }
}