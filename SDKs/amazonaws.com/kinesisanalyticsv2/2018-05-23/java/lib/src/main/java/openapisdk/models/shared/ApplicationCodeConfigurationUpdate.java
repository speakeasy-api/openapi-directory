package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ApplicationCodeConfigurationUpdate
 * Describes code configuration updates for an application. This is supported for a Flink-based Kinesis Data Analytics application or a SQL-based Kinesis Data Analytics application.
**/
public class ApplicationCodeConfigurationUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeContentTypeUpdate")
    public CodeContentTypeEnum codeContentTypeUpdate;
    public ApplicationCodeConfigurationUpdate withCodeContentTypeUpdate(CodeContentTypeEnum codeContentTypeUpdate) {
        this.codeContentTypeUpdate = codeContentTypeUpdate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CodeContentUpdate")
    public CodeContentUpdate codeContentUpdate;
    public ApplicationCodeConfigurationUpdate withCodeContentUpdate(CodeContentUpdate codeContentUpdate) {
        this.codeContentUpdate = codeContentUpdate;
        return this;
    }
}