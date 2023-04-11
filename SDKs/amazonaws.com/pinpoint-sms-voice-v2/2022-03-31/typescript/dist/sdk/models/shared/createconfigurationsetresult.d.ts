import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreateConfigurationSetResult extends SpeakeasyBase {
    configurationSetArn?: string;
    configurationSetName?: string;
    createdTimestamp?: Date;
    tags?: Tag[];
}
