import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Success
 */
export declare class CreateConnectionOutput extends SpeakeasyBase {
    connectionArn: string;
    tags?: Tag[];
}
