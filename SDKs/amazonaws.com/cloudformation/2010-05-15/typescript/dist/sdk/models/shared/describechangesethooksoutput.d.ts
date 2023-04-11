import { SpeakeasyBase } from "../../../internal/utils";
import { ChangeSetHook } from "./changesethook";
import { ChangeSetHooksStatusEnum } from "./changesethooksstatusenum";
/**
 * Success
 */
export declare class DescribeChangeSetHooksOutput extends SpeakeasyBase {
    changeSetId?: string;
    changeSetName?: string;
    hooks?: ChangeSetHook[];
    nextToken?: string;
    stackId?: string;
    stackName?: string;
    status?: ChangeSetHooksStatusEnum;
}
