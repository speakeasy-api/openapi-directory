import { SpeakeasyBase } from "../../../internal/utils";
import { EksContainerEnvironmentVariable } from "./ekscontainerenvironmentvariable";
import { EksContainerResourceRequirements } from "./ekscontainerresourcerequirements";
import { EksContainerSecurityContext } from "./ekscontainersecuritycontext";
import { EksContainerVolumeMount } from "./ekscontainervolumemount";
/**
 * The details for container properties that are returned by <code>DescribeJobs</code> for jobs that use Amazon EKS.
 */
export declare class EksContainerDetail extends SpeakeasyBase {
    args?: string[];
    command?: string[];
    env?: EksContainerEnvironmentVariable[];
    exitCode?: number;
    image?: string;
    imagePullPolicy?: string;
    name?: string;
    reason?: string;
    resources?: EksContainerResourceRequirements;
    securityContext?: EksContainerSecurityContext;
    volumeMounts?: EksContainerVolumeMount[];
}
