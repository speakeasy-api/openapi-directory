import { SpeakeasyBase } from "../../../internal/utils";
import { VulnerableComponent } from "./vulnerablecomponent";
export declare class FirmwareRiskRiskSummary extends SpeakeasyBase {
    clientToolsRisk?: string;
    cryptoRisk?: string;
    kernelRisk?: string;
    netServicesRisk?: string;
}
export declare class FirmwareRisk extends SpeakeasyBase {
    riskSummary?: FirmwareRiskRiskSummary;
    vulnerableComponents?: VulnerableComponent[];
}
