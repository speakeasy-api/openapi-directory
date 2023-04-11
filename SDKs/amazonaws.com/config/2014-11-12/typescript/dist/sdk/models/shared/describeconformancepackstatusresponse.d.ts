import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackStatusDetail } from "./conformancepackstatusdetail";
/**
 * Success
 */
export declare class DescribeConformancePackStatusResponse extends SpeakeasyBase {
    conformancePackStatusDetails?: ConformancePackStatusDetail[];
    nextToken?: string;
}
