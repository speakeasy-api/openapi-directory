import { SpeakeasyBase } from "../../../internal/utils";
import { CoverageResourceTypeEnum } from "./coverageresourcetypeenum";
import { ResourceScanMetadata } from "./resourcescanmetadata";
import { ScanStatus } from "./scanstatus";
import { ScanTypeEnum } from "./scantypeenum";
/**
 * An object that contains details about a resource covered by Amazon Inspector.
 */
export declare class CoveredResource extends SpeakeasyBase {
    accountId: string;
    resourceId: string;
    resourceMetadata?: ResourceScanMetadata;
    resourceType: CoverageResourceTypeEnum;
    scanStatus?: ScanStatus;
    scanType: ScanTypeEnum;
}
