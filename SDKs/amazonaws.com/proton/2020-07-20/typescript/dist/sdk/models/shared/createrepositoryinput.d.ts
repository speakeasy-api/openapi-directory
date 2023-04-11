import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
import { Tag } from "./tag";
export declare class CreateRepositoryInput extends SpeakeasyBase {
    connectionArn: string;
    encryptionKey?: string;
    name: string;
    provider: RepositoryProviderEnum;
    tags?: Tag[];
}
