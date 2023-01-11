package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ExportResourceSpecification
 * Provides information about the bot or bot locale that you want to export. You can specify the <code>botExportSpecification</code> or the <code>botLocaleExportSpecification</code>, but not both.
**/
public class ExportResourceSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botExportSpecification")
    public BotExportSpecification botExportSpecification;
    public ExportResourceSpecification withBotExportSpecification(BotExportSpecification botExportSpecification) {
        this.botExportSpecification = botExportSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleExportSpecification")
    public BotLocaleExportSpecification botLocaleExportSpecification;
    public ExportResourceSpecification withBotLocaleExportSpecification(BotLocaleExportSpecification botLocaleExportSpecification) {
        this.botLocaleExportSpecification = botLocaleExportSpecification;
        return this;
    }
}