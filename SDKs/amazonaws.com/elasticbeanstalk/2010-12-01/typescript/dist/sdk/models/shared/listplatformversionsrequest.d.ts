import { SpeakeasyBase } from "../../../internal/utils";
import { PlatformFilter } from "./platformfilter";
export declare class ListPlatformVersionsRequest extends SpeakeasyBase {
    filters?: PlatformFilter[];
    maxRecords?: number;
    nextToken?: string;
}
