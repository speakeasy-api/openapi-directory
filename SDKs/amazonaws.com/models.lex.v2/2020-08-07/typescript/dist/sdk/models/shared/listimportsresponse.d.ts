import { SpeakeasyBase } from "../../../internal/utils";
import { ImportSummary } from "./importsummary";
/**
 * Success
 */
export declare class ListImportsResponse extends SpeakeasyBase {
    botId?: string;
    botVersion?: string;
    importSummaries?: ImportSummary[];
    localeId?: string;
    nextToken?: string;
}
