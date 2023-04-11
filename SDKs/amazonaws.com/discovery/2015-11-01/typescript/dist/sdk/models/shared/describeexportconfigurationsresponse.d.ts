import { SpeakeasyBase } from "../../../internal/utils";
import { ExportInfo } from "./exportinfo";
/**
 * Success
 */
export declare class DescribeExportConfigurationsResponse extends SpeakeasyBase {
    exportsInfo?: ExportInfo[];
    nextToken?: string;
}
