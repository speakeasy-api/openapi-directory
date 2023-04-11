import { SpeakeasyBase } from "../../../internal/utils";
import { FarmOrganizationTypeEnum } from "./farmorganizationtypeenum";
/**
 * Logical representation of a farm organization with a name and type.
 */
export declare class FarmOrganization extends SpeakeasyBase {
    /**
     * Unique identifier for a farm organization.
     */
    id: string;
    /**
     * Name of the farm organization.
     */
    name: string;
    /**
     * Type of the farm organization.
     */
    type: FarmOrganizationTypeEnum;
}
