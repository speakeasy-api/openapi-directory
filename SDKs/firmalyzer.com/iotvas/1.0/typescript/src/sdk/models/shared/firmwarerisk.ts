import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VulnerableComponent } from "./vulnerablecomponent";



export class FirmwareRiskRiskSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_tools_risk" })
  clientToolsRisk?: string;

  @SpeakeasyMetadata({ data: "json, name=crypto_risk" })
  cryptoRisk?: string;

  @SpeakeasyMetadata({ data: "json, name=kernel_risk" })
  kernelRisk?: string;

  @SpeakeasyMetadata({ data: "json, name=net_services_risk" })
  netServicesRisk?: string;
}


export class FirmwareRisk extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=risk_summary" })
  riskSummary?: FirmwareRiskRiskSummary;

  @SpeakeasyMetadata({ data: "json, name=vulnerable_components", elemType: VulnerableComponent })
  vulnerableComponents?: VulnerableComponent[];
}
