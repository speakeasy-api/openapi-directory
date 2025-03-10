import { SpeakeasyBase } from "../../../internal/utils";
import { SourceFrequencyEnum } from "./sourcefrequencyenum";
import { SourceKeyword } from "./sourcekeyword";
import { SourceSetUpOptionEnum } from "./sourcesetupoptionenum";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 *  The data source that determines where Audit Manager collects evidence from for the control.
 */
export declare class ControlMappingSource extends SpeakeasyBase {
    sourceDescription?: string;
    sourceFrequency?: SourceFrequencyEnum;
    sourceId?: string;
    /**
     * <p> The keyword to search for in CloudTrail logs, Config rules, Security Hub checks, and Amazon Web Services API names. </p> <p> To learn more about the supported keywords that you can use when mapping a control data source, see the following pages in the <i>Audit Manager User Guide</i>:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-ash.html">Config rules supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-config.html">Security Hub controls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-api.html">API calls supported by Audit Manager</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/audit-manager/latest/userguide/control-data-sources-cloudtrail.html">CloudTrail event names supported by Audit Manager</a> </p> </li> </ul>
     */
    sourceKeyword?: SourceKeyword;
    sourceName?: string;
    sourceSetUpOption?: SourceSetUpOptionEnum;
    sourceType?: SourceTypeEnum;
    troubleshootingText?: string;
}
