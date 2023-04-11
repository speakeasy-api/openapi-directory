import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";
/**
 * Contains a summary of information about an access preview.
 */
export declare class AccessPreviewSummary extends SpeakeasyBase {
    analyzerArn: string;
    createdAt: Date;
    id: string;
    status: AccessPreviewStatusEnum;
    /**
     * Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a <code>Failed</code> status is returned. This failure can be due to an internal issue with the analysis or due to an invalid proposed resource configuration.
     */
    statusReason?: AccessPreviewStatusReason;
}
