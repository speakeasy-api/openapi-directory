import { SpeakeasyBase } from "../../../internal/utils";
import { AnalysisScheme } from "./analysisscheme";
import { OptionStatus } from "./optionstatus";
/**
 * The status and configuration of an <code>AnalysisScheme</code>.
 */
export declare class AnalysisSchemeStatus extends SpeakeasyBase {
    /**
     * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
     */
    options: AnalysisScheme;
    /**
     * The status of domain configuration option.
     */
    status: OptionStatus;
}
