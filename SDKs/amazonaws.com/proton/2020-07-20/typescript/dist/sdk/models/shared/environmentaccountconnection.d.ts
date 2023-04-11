import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";
/**
 * Detailed data of an Proton environment account connection resource.
 */
export declare class EnvironmentAccountConnection extends SpeakeasyBase {
    arn: string;
    codebuildRoleArn?: string;
    componentRoleArn?: string;
    environmentAccountId: string;
    environmentName: string;
    id: string;
    lastModifiedAt: Date;
    managementAccountId: string;
    requestedAt: Date;
    roleArn: string;
    status: EnvironmentAccountConnectionStatusEnum;
}
