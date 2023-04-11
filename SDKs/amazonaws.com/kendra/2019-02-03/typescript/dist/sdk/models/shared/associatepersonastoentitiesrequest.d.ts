import { SpeakeasyBase } from "../../../internal/utils";
import { EntityPersonaConfiguration } from "./entitypersonaconfiguration";
export declare class AssociatePersonasToEntitiesRequest extends SpeakeasyBase {
    id: string;
    indexId: string;
    personas: EntityPersonaConfiguration[];
}
