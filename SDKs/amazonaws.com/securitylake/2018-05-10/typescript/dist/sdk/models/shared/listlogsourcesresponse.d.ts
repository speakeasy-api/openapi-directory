import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class ListLogSourcesResponse extends SpeakeasyBase {
    nextToken?: string;
    regionSourceTypesAccountsList: Record<string, Record<string, string[]>>[];
}
