import { SpeakeasyBase } from "../../../internal/utils";
import { Runbook } from "./runbook";
import { Tag } from "./tag";
export declare class StartChangeRequestExecutionRequest extends SpeakeasyBase {
    autoApprove?: boolean;
    changeDetails?: string;
    changeRequestName?: string;
    clientToken?: string;
    documentName: string;
    documentVersion?: string;
    parameters?: Record<string, string[]>;
    runbooks: Runbook[];
    scheduledEndTime?: Date;
    scheduledTime?: Date;
    tags?: Tag[];
}
