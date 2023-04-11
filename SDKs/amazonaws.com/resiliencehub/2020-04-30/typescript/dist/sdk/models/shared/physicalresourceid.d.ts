import { SpeakeasyBase } from "../../../internal/utils";
import { PhysicalIdentifierTypeEnum } from "./physicalidentifiertypeenum";
/**
 * Defines a physical resource identifier.
 */
export declare class PhysicalResourceId extends SpeakeasyBase {
    awsAccountId?: string;
    awsRegion?: string;
    identifier: string;
    type: PhysicalIdentifierTypeEnum;
}
