import { SpeakeasyBase } from "../../../internal/utils";
import { DataRepositoryLifecycleEnum } from "./datarepositorylifecycleenum";
/**
 * Success
 */
export declare class DeleteDataRepositoryAssociationResponse extends SpeakeasyBase {
    associationId?: string;
    deleteDataInFileSystem?: boolean;
    lifecycle?: DataRepositoryLifecycleEnum;
}
