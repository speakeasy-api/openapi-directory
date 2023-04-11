import { SpeakeasyBase } from "../../../internal/utils";
import { IPSetUpdate } from "./ipsetupdate";
export declare class UpdateIPSetRequest extends SpeakeasyBase {
    changeToken: string;
    ipSetId: string;
    updates: IPSetUpdate[];
}
