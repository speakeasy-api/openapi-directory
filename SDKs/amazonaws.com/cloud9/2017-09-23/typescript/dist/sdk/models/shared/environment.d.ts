import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectionTypeEnum } from "./connectiontypeenum";
import { EnvironmentLifecycle } from "./environmentlifecycle";
import { EnvironmentTypeEnum } from "./environmenttypeenum";
import { ManagedCredentialsStatusEnum } from "./managedcredentialsstatusenum";
/**
 * Information about an Cloud9 development environment.
 */
export declare class Environment extends SpeakeasyBase {
    arn: string;
    connectionType?: ConnectionTypeEnum;
    description?: string;
    id?: string;
    lifecycle?: EnvironmentLifecycle;
    managedCredentialsStatus?: ManagedCredentialsStatusEnum;
    name?: string;
    ownerArn: string;
    type: EnvironmentTypeEnum;
}
