import { SpeakeasyBase } from "../../../internal/utils";
import { LogsStatus } from "./logsstatus";
import { OcsfEventClassEnum } from "./ocsfeventclassenum";
/**
 * Amazon Security Lake collects logs and events from supported Amazon Web Services and custom sources. For the list of supported Amazon Web Services, see the <a href="https://docs.aws.amazon.com/security-lake/latest/userguide/internal-sources.html">Amazon Security Lake User Guide</a>.
 */
export declare class AccountSources extends SpeakeasyBase {
    account: string;
    eventClass?: OcsfEventClassEnum;
    logsStatus?: LogsStatus[];
    sourceType: string;
}
