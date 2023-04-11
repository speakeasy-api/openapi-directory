import { SpeakeasyBase } from "../../../internal/utils";
import { FilterDefinition } from "./filterdefinition";
export declare class ListNotebookMetadataInput extends SpeakeasyBase {
    filters?: FilterDefinition;
    maxResults?: number;
    nextToken?: string;
    workGroup: string;
}
