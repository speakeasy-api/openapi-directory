import { SpeakeasyBase } from "../../../internal/utils";
import { ContainerOverrides } from "./containeroverrides";
/**
 * The object that represents any node overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
 */
export declare class NodePropertyOverride extends SpeakeasyBase {
    containerOverrides?: ContainerOverrides;
    targetNodes: string;
}
