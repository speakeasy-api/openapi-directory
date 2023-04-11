import { SpeakeasyBase } from "../../../internal/utils";
import { SearchFilter } from "./searchfilter";
export declare class ListPlatformBranchesRequest extends SpeakeasyBase {
    filters?: SearchFilter[];
    maxRecords?: number;
    nextToken?: string;
}
