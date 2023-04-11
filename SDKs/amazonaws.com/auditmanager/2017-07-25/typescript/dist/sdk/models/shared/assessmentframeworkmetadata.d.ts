import { SpeakeasyBase } from "../../../internal/utils";
import { FrameworkTypeEnum } from "./frameworktypeenum";
/**
 *  The metadata that's associated with a standard framework or a custom framework.
 */
export declare class AssessmentFrameworkMetadata extends SpeakeasyBase {
    arn?: string;
    complianceType?: string;
    controlSetsCount?: number;
    controlsCount?: number;
    createdAt?: Date;
    description?: string;
    id?: string;
    lastUpdatedAt?: Date;
    logo?: string;
    name?: string;
    type?: FrameworkTypeEnum;
}
