import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeOperation } from "./attributeoperation";
export declare class UpdateGroupRequest extends SpeakeasyBase {
    groupId: string;
    identityStoreId: string;
    operations: AttributeOperation[];
}
