import { SpeakeasyBase } from "../../../internal/utils";
import { ListSourceRepositoryBranchesItem } from "./listsourcerepositorybranchesitem";
/**
 * Success
 */
export declare class ListSourceRepositoryBranchesResponse extends SpeakeasyBase {
    items: ListSourceRepositoryBranchesItem[];
    nextToken?: string;
}
