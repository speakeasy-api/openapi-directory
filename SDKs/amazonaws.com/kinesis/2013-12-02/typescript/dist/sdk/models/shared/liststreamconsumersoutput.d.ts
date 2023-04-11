import { SpeakeasyBase } from "../../../internal/utils";
import { Consumer } from "./consumer";
/**
 * Success
 */
export declare class ListStreamConsumersOutput extends SpeakeasyBase {
    consumers?: Consumer[];
    nextToken?: string;
}
