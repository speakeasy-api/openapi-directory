import { SpeakeasyBase } from "../../../internal/utils";
import { ImportsListItem } from "./importslistitem";
/**
 * Success
 */
export declare class ListImportsResponse extends SpeakeasyBase {
    imports?: ImportsListItem[];
    nextToken?: string;
}
