import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationTypeEnum } from "./applicationtypeenum";
/**
 * The summary of the SAP application registered with AWS Systems Manager for SAP.
 */
export declare class ApplicationSummary extends SpeakeasyBase {
    arn?: string;
    id?: string;
    tags?: Record<string, string>;
    type?: ApplicationTypeEnum;
}
