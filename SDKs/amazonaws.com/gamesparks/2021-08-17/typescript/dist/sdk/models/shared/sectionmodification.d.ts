import { SpeakeasyBase } from "../../../internal/utils";
import { OperationEnum } from "./operationenum";
/**
 * A single modification to the configuration section.
 */
export declare class SectionModification extends SpeakeasyBase {
    operation: OperationEnum;
    path: string;
    section: string;
    value?: Record<string, any>;
}
