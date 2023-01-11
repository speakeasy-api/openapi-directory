package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateExportRequestBodyResourceSpecification
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
public class CreateExportRequestBodyResourceSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botExportSpecification")
    public openapisdk.models.shared.BotExportSpecification botExportSpecification;
    public CreateExportRequestBodyResourceSpecification withBotExportSpecification(openapisdk.models.shared.BotExportSpecification botExportSpecification) {
        this.botExportSpecification = botExportSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleExportSpecification")
    public openapisdk.models.shared.BotLocaleExportSpecification botLocaleExportSpecification;
    public CreateExportRequestBodyResourceSpecification withBotLocaleExportSpecification(openapisdk.models.shared.BotLocaleExportSpecification botLocaleExportSpecification) {
        this.botLocaleExportSpecification = botLocaleExportSpecification;
        return this;
    }
}