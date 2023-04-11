import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceSignalStatusEnum } from "./resourcesignalstatusenum";
/**
 * The input for the <a>SignalResource</a> action.
 */
export declare class SignalResourceInput extends SpeakeasyBase {
    logicalResourceId: string;
    stackName: string;
    status: ResourceSignalStatusEnum;
    uniqueId: string;
}
