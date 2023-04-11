import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Provides the configuration information for suggested query spell corrections.</p> <p>Suggested spell corrections are based on words that appear in your indexed documents and how closely a corrected word matches a misspelled word.</p> <p>This feature is designed with certain defaults or limits. For information on the current limits and how to request more support for some limits, see the <a href="https://docs.aws.amazon.com/kendra/latest/dg/query-spell-check.html">Spell Checker documentation</a>.</p>
 */
export declare class SpellCorrectionConfiguration extends SpeakeasyBase {
    includeQuerySpellCheckSuggestions: boolean;
}
