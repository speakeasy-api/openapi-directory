import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";
/**
 * Summary data of an Proton environment account connection resource.
 */
export declare class EnvironmentAccountConnectionSummary extends SpeakeasyBase {
    arn: string;
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
