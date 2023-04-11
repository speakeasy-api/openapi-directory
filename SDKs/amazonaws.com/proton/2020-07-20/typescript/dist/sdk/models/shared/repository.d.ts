import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
/**
 * Detailed data of a linked repository—a repository that has been registered with Proton.
 */
export declare class Repository extends SpeakeasyBase {
    arn: string;
    connectionArn: string;
    encryptionKey?: string;
    name: string;
    provider: RepositoryProviderEnum;
}
