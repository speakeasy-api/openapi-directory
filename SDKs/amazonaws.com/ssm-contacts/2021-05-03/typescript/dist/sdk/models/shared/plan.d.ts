import { SpeakeasyBase } from "../../../internal/utils";
import { Stage } from "./stage";
/**
 * Information about the stages and on-call rotation teams associated with an escalation plan or engagement plan.
 */
export declare class Plan extends SpeakeasyBase {
    rotationIds?: string[];
    stages?: Stage[];
}
