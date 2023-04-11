import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeOperation } from "./attributeoperation";
export declare class UpdateUserRequest extends SpeakeasyBase {
    identityStoreId: string;
    operations: AttributeOperation[];
    userId: string;
}
