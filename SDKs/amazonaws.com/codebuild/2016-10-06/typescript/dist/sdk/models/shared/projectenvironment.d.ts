import { SpeakeasyBase } from "../../../internal/utils";
import { ComputeTypeEnum } from "./computetypeenum";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
import { EnvironmentVariable } from "./environmentvariable";
import { ImagePullCredentialsTypeEnum } from "./imagepullcredentialstypeenum";
import { RegistryCredential } from "./registrycredential";
/**
 * Information about the build environment of the build project.
 */
export declare class ProjectEnvironment extends SpeakeasyBase {
    certificate?: string;
    computeType: ComputeTypeEnum;
    environmentVariables?: EnvironmentVariable[];
    image: string;
    imagePullCredentialsType?: ImagePullCredentialsTypeEnum;
    privilegedMode?: boolean;
    registryCredential?: RegistryCredential;
    type: EnvironmentTypeEnum;
}
