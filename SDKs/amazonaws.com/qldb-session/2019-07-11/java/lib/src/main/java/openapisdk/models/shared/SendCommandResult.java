package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SendCommandResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AbortTransaction")
    public AbortTransactionResult abortTransaction;
    public SendCommandResult withAbortTransaction(AbortTransactionResult abortTransaction) {
        this.abortTransaction = abortTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CommitTransaction")
    public CommitTransactionResult commitTransaction;
    public SendCommandResult withCommitTransaction(CommitTransactionResult commitTransaction) {
        this.commitTransaction = commitTransaction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndSession")
    public EndSessionResult endSession;
    public SendCommandResult withEndSession(EndSessionResult endSession) {
        this.endSession = endSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExecuteStatement")
    public ExecuteStatementResult executeStatement;
    public SendCommandResult withExecuteStatement(ExecuteStatementResult executeStatement) {
        this.executeStatement = executeStatement;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FetchPage")
    public FetchPageResult fetchPage;
    public SendCommandResult withFetchPage(FetchPageResult fetchPage) {
        this.fetchPage = fetchPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartSession")
    public StartSessionResult startSession;
    public SendCommandResult withStartSession(StartSessionResult startSession) {
        this.startSession = startSession;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartTransaction")
    public StartTransactionResult startTransaction;
    public SendCommandResult withStartTransaction(StartTransactionResult startTransaction) {
        this.startTransaction = startTransaction;
        return this;
    }
}