import { SpeakeasyBase } from "../../../internal/utils";
import { EksContainerEnvironmentVariable } from "./ekscontainerenvironmentvariable";
import { EksContainerResourceRequirements } from "./ekscontainerresourcerequirements";
/**
 * Object representing any Kubernetes overrides to a job definition that's used in a <a>SubmitJob</a> API operation.
 */
export declare class EksContainerOverride extends SpeakeasyBase {
    args?: string[];
    command?: string[];
    env?: EksContainerEnvironmentVariable[];
    image?: string;
    resources?: EksContainerResourceRequirements;
}
