import { SpeakeasyBase } from "../../../internal/utils";
import { LastSync } from "./lastsync";
import { SourceConnectionParameters } from "./sourceconnectionparameters";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 * Provides details about the configured <code>SourceConnection</code>.
 */
export declare class SourceConnectionDetail extends SpeakeasyBase {
    connectionParameters?: SourceConnectionParameters;
    lastSync?: LastSync;
    type?: SourceTypeEnum;
}
