import { SpeakeasyBase } from "../../../internal/utils";
import { AppVisibilityEnum } from "./appvisibilityenum";
import { EntitlementAttribute } from "./entitlementattribute";
export declare class CreateEntitlementRequest extends SpeakeasyBase {
    appVisibility: AppVisibilityEnum;
    attributes: EntitlementAttribute[];
    description?: string;
    name: string;
    stackName: string;
}
