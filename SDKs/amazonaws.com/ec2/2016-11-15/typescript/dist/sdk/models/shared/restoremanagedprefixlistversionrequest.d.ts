import { SpeakeasyBase } from "../../../internal/utils";
export declare class RestoreManagedPrefixListVersionRequest extends SpeakeasyBase {
    currentVersion: number;
    dryRun?: boolean;
    prefixListId: string;
    previousVersion: number;
}
