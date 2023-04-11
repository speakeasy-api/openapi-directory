import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryScanningRule } from "./registryscanningrule";
import { ScanTypeEnum } from "./scantypeenum";
/**
 * The scanning configuration for a private registry.
 */
export declare class RegistryScanningConfiguration extends SpeakeasyBase {
    rules?: RegistryScanningRule[];
    scanType?: ScanTypeEnum;
}
