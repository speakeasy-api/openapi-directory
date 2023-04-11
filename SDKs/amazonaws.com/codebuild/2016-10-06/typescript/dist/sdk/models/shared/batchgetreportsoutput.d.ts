import { SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";
/**
 * Success
 */
export declare class BatchGetReportsOutput extends SpeakeasyBase {
    reports?: Report[];
    reportsNotFound?: string[];
}
