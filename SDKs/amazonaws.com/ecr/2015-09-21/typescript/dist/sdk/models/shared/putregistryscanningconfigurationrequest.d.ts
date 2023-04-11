import { SpeakeasyBase } from "../../../internal/utils";
import { RegistryScanningRule } from "./registryscanningrule";
import { ScanTypeEnum } from "./scantypeenum";
export declare class PutRegistryScanningConfigurationRequest extends SpeakeasyBase {
    rules?: RegistryScanningRule[];
    scanType?: ScanTypeEnum;
}
