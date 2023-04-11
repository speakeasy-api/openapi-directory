import { SpeakeasyBase } from "../../../internal/utils";
import { AddressAttributeNameEnum } from "./addressattributenameenum";
export declare class ResetAddressAttributeRequest extends SpeakeasyBase {
    allocationId: string;
    attribute: AddressAttributeNameEnum;
    dryRun?: boolean;
}
