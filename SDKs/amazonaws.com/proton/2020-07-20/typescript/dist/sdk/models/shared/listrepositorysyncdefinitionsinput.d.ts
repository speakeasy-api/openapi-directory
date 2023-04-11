import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
import { SyncTypeEnum } from "./synctypeenum";
export declare class ListRepositorySyncDefinitionsInput extends SpeakeasyBase {
    nextToken?: string;
    repositoryName: string;
    repositoryProvider: RepositoryProviderEnum;
    syncType: SyncTypeEnum;
}
