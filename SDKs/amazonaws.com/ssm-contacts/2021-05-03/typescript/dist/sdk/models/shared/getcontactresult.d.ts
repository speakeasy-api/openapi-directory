import { SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";
import { Plan } from "./plan";
/**
 * Success
 */
export declare class GetContactResult extends SpeakeasyBase {
    alias: string;
    contactArn: string;
    displayName?: string;
    plan: Plan;
    type: ContactTypeEnum;
}
