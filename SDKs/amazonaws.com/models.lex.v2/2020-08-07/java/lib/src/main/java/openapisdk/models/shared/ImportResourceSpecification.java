package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ImportResourceSpecification
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
public class ImportResourceSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botImportSpecification")
    public BotImportSpecification botImportSpecification;
    public ImportResourceSpecification withBotImportSpecification(BotImportSpecification botImportSpecification) {
        this.botImportSpecification = botImportSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleImportSpecification")
    public BotLocaleImportSpecification botLocaleImportSpecification;
    public ImportResourceSpecification withBotLocaleImportSpecification(BotLocaleImportSpecification botLocaleImportSpecification) {
        this.botLocaleImportSpecification = botLocaleImportSpecification;
        return this;
    }
}