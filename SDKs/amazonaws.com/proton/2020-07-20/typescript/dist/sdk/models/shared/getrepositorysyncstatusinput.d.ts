import { SpeakeasyBase } from "../../../internal/utils";
import { RepositoryProviderEnum } from "./repositoryproviderenum";
import { SyncTypeEnum } from "./synctypeenum";
export declare class GetRepositorySyncStatusInput extends SpeakeasyBase {
    branch: string;
    repositoryName: string;
    repositoryProvider: RepositoryProviderEnum;
    syncType: SyncTypeEnum;
}
