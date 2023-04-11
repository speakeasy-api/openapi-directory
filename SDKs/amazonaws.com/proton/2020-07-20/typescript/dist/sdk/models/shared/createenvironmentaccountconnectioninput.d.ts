import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateEnvironmentAccountConnectionInput extends SpeakeasyBase {
    clientToken?: string;
    codebuildRoleArn?: string;
    componentRoleArn?: string;
    environmentName: string;
    managementAccountId: string;
    roleArn?: string;
    tags?: Tag[];
}
