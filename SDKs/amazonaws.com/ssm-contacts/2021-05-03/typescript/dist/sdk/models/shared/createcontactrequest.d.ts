import { SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
import { Plan } from "./plan";
import { Tag } from "./tag";
export declare class CreateContactRequest extends SpeakeasyBase {
    alias: string;
    displayName?: string;
    idempotencyToken?: string;
    plan: Plan;
    tags?: Tag[];
    type: ContactTypeEnum;
}
