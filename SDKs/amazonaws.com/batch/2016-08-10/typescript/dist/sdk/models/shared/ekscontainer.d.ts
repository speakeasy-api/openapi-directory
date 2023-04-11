import { SpeakeasyBase } from "../../../internal/utils";
import { EksContainerEnvironmentVariable } from "./ekscontainerenvironmentvariable";
import { EksContainerResourceRequirements } from "./ekscontainerresourcerequirements";
import { EksContainerSecurityContext } from "./ekscontainersecuritycontext";
import { EksContainerVolumeMount } from "./ekscontainervolumemount";
/**
 * EKS container properties are used in job definitions for Amazon EKS based job definitions to describe the properties for a container node in the pod that's launched as part of a job. This can't be specified for Amazon ECS based job definitions.
 */
export declare class EksContainer extends SpeakeasyBase {
    args?: string[];
    command?: string[];
    env?: EksContainerEnvironmentVariable[];
    image: string;
    imagePullPolicy?: string;
    name?: string;
    resources?: EksContainerResourceRequirements;
    securityContext?: EksContainerSecurityContext;
    volumeMounts?: EksContainerVolumeMount[];
}
