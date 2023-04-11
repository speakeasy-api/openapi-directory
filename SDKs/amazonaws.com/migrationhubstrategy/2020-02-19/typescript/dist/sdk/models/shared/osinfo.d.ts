import { SpeakeasyBase } from "../../../internal/utils";
import { OSTypeEnum } from "./ostypeenum";
/**
 *  Information about the operating system.
 */
export declare class OSInfo extends SpeakeasyBase {
    type?: OSTypeEnum;
    version?: string;
}
