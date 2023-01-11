package openapisdk.models.shared;



public class UpdateActionResultsMessage {
    public ProcessedUpdateActionList[] processedUpdateActions;
    public UpdateActionResultsMessage withProcessedUpdateActions(ProcessedUpdateActionList[] processedUpdateActions) {
        this.processedUpdateActions = processedUpdateActions;
        return this;
    }
    public UnprocessedUpdateActionList[] unprocessedUpdateActions;
    public UpdateActionResultsMessage withUnprocessedUpdateActions(UnprocessedUpdateActionList[] unprocessedUpdateActions) {
        this.unprocessedUpdateActions = unprocessedUpdateActions;
        return this;
    }
}