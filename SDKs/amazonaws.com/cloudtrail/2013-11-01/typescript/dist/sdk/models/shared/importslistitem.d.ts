import { SpeakeasyBase } from "../../../internal/utils";
import { ImportStatusEnum } from "./importstatusenum";
/**
 *  Contains information about an import that was returned by a lookup request.
 */
export declare class ImportsListItem extends SpeakeasyBase {
    createdTimestamp?: Date;
    destinations?: string[];
    importId?: string;
    importStatus?: ImportStatusEnum;
    updatedTimestamp?: Date;
}
