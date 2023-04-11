import { SpeakeasyBase } from "../../../internal/utils";
import { OutputLocation } from "./outputlocation";
import { WorldExportJobErrorCodeEnum } from "./worldexportjoberrorcodeenum";
import { WorldExportJobStatusEnum } from "./worldexportjobstatusenum";
/**
 * Success
 */
export declare class DescribeWorldExportJobResponse extends SpeakeasyBase {
    arn?: string;
    clientRequestToken?: string;
    createdAt?: Date;
    failureCode?: WorldExportJobErrorCodeEnum;
    failureReason?: string;
    iamRole?: string;
    /**
     * The output location.
     */
    outputLocation?: OutputLocation;
    status?: WorldExportJobStatusEnum;
    tags?: Record<string, string>;
    worlds?: string[];
}
