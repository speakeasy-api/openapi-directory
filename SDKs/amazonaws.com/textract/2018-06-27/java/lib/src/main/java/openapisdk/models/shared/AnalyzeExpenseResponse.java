package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AnalyzeExpenseResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DocumentMetadata")
    public DocumentMetadata documentMetadata;
    public AnalyzeExpenseResponse withDocumentMetadata(DocumentMetadata documentMetadata) {
        this.documentMetadata = documentMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ExpenseDocuments")
    public ExpenseDocument[] expenseDocuments;
    public AnalyzeExpenseResponse withExpenseDocuments(ExpenseDocument[] expenseDocuments) {
        this.expenseDocuments = expenseDocuments;
        return this;
    }
}