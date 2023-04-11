import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  Specifies the conditions under which data should be updated. If an update condition is specified for a request, the data will only be updated if the condition is satisfied. For example, if an attribute with a specific name and value exists, or if a specific attribute doesn't exist.
 */
export declare class UpdateCondition extends SpeakeasyBase {
    exists?: boolean;
    name?: string;
    value?: string;
}
