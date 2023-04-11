import { SpeakeasyBase } from "../../../internal/utils";
import { ServiceStatusEnum } from "./servicestatusenum";
/**
 * Summary data of an Proton service resource.
 */
export declare class ServiceSummary extends SpeakeasyBase {
    arn: string;
    createdAt: Date;
    description?: string;
    lastModifiedAt: Date;
    name: string;
    status: ServiceStatusEnum;
    statusMessage?: string;
    templateName: string;
}
