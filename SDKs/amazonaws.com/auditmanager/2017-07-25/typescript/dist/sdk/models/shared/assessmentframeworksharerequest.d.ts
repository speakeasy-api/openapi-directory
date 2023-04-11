import { SpeakeasyBase } from "../../../internal/utils";
import { ShareRequestStatusEnum } from "./sharerequeststatusenum";
/**
 *  Represents a share request for a custom framework in Audit Manager.
 */
export declare class AssessmentFrameworkShareRequest extends SpeakeasyBase {
    comment?: string;
    complianceType?: string;
    creationTime?: Date;
    customControlsCount?: number;
    destinationAccount?: string;
    destinationRegion?: string;
    expirationTime?: Date;
    frameworkDescription?: string;
    frameworkId?: string;
    frameworkName?: string;
    id?: string;
    lastUpdated?: Date;
    sourceAccount?: string;
    standardControlsCount?: number;
    status?: ShareRequestStatusEnum;
}
