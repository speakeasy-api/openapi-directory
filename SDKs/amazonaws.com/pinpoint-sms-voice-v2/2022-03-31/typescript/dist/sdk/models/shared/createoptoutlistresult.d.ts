import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreateOptOutListResult extends SpeakeasyBase {
    createdTimestamp?: Date;
    optOutListArn?: string;
    optOutListName?: string;
    tags?: Tag[];
}
