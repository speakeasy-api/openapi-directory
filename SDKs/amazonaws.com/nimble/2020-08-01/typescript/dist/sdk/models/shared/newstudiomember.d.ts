import { SpeakeasyBase } from "../../../internal/utils";
import { StudioPersonaEnum } from "./studiopersonaenum";
/**
 * A new studio user's membership.
 */
export declare class NewStudioMember extends SpeakeasyBase {
    persona: StudioPersonaEnum;
    principalId: string;
}
