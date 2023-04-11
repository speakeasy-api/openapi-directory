import { SpeakeasyBase } from "../../../internal/utils";
import { AccessPreviewStatusEnum } from "./accesspreviewstatusenum";
import { AccessPreviewStatusReason } from "./accesspreviewstatusreason";
import { Configuration } from "./configuration";
/**
 * Contains information about an access preview.
 */
export declare class AccessPreview extends SpeakeasyBase {
    analyzerArn: string;
    configurations: Record<string, Configuration>;
    createdAt: Date;
    id: string;
    status: AccessPreviewStatusEnum;
    statusReason?: AccessPreviewStatusReason;
}
