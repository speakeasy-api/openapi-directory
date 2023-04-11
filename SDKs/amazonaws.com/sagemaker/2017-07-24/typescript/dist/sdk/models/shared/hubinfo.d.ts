import { SpeakeasyBase } from "../../../internal/utils";
import { HubStatusEnum } from "./hubstatusenum";
/**
 * Information about a hub.
 */
export declare class HubInfo extends SpeakeasyBase {
    creationTime: Date;
    hubArn: string;
    hubDescription?: string;
    hubDisplayName?: string;
    hubName: string;
    hubSearchKeywords?: string[];
    hubStatus: HubStatusEnum;
    lastModifiedTime: Date;
}
