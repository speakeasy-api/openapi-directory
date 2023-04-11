import { SpeakeasyBase } from "../../../internal/utils";
import { SenderIdFilterNameEnum } from "./senderidfilternameenum";
/**
 * The information for a sender ID that meets a specified criteria.
 */
export declare class SenderIdFilter extends SpeakeasyBase {
    name: SenderIdFilterNameEnum;
    values: string[];
}
