import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SecurityAndAnalysisAdvancedSecurityStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class SecurityAndAnalysisAdvancedSecurity extends SpeakeasyBase {
    status?: SecurityAndAnalysisAdvancedSecurityStatusEnum;
}
export declare enum SecurityAndAnalysisSecretScanningStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class SecurityAndAnalysisSecretScanning extends SpeakeasyBase {
    status?: SecurityAndAnalysisSecretScanningStatusEnum;
}
export declare enum SecurityAndAnalysisSecretScanningPushProtectionStatusEnum {
    Enabled = "enabled",
    Disabled = "disabled"
}
export declare class SecurityAndAnalysisSecretScanningPushProtection extends SpeakeasyBase {
    status?: SecurityAndAnalysisSecretScanningPushProtectionStatusEnum;
}
export declare class SecurityAndAnalysis extends SpeakeasyBase {
    advancedSecurity?: SecurityAndAnalysisAdvancedSecurity;
    secretScanning?: SecurityAndAnalysisSecretScanning;
    secretScanningPushProtection?: SecurityAndAnalysisSecretScanningPushProtection;
}
