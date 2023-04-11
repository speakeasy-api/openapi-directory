import { SpeakeasyBase } from "../../../internal/utils";
import { ConformancePackDetail } from "./conformancepackdetail";
/**
 * Success
 */
export declare class DescribeConformancePacksResponse extends SpeakeasyBase {
    conformancePackDetails?: ConformancePackDetail[];
    nextToken?: string;
}
