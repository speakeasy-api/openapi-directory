package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartImportRequestBodyResourceSpecification
 * Provides information about the bot or bot locale that you want to import. You can sepcifiy the <code>botImportSpecification</code> or the <code>botLocaleImportSpecification</code>, but not both.
**/
public class StartImportRequestBodyResourceSpecification {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botImportSpecification")
    public openapisdk.models.shared.BotImportSpecification botImportSpecification;
    public StartImportRequestBodyResourceSpecification withBotImportSpecification(openapisdk.models.shared.BotImportSpecification botImportSpecification) {
        this.botImportSpecification = botImportSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("botLocaleImportSpecification")
    public openapisdk.models.shared.BotLocaleImportSpecification botLocaleImportSpecification;
    public StartImportRequestBodyResourceSpecification withBotLocaleImportSpecification(openapisdk.models.shared.BotLocaleImportSpecification botLocaleImportSpecification) {
        this.botLocaleImportSpecification = botLocaleImportSpecification;
        return this;
    }
}