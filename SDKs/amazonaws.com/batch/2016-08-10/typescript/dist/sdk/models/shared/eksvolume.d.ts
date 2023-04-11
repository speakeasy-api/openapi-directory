import { SpeakeasyBase } from "../../../internal/utils";
import { EksEmptyDir } from "./eksemptydir";
import { EksHostPath } from "./ekshostpath";
import { EksSecret } from "./ekssecret";
/**
 * Specifies an Amazon EKS volume for a job definition.
 */
export declare class EksVolume extends SpeakeasyBase {
    emptyDir?: EksEmptyDir;
    hostPath?: EksHostPath;
    name: string;
    secret?: EksSecret;
}
