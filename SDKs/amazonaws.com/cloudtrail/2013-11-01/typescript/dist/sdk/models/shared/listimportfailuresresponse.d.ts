import { SpeakeasyBase } from "../../../internal/utils";
import { ImportFailureListItem } from "./importfailurelistitem";
/**
 * Success
 */
export declare class ListImportFailuresResponse extends SpeakeasyBase {
    failures?: ImportFailureListItem[];
    nextToken?: string;
}
